import express, { type Response, type Request } from "express";
const mysql = require("mysql2")

const app = express();
const conn = mysql.createConnection({
    host: "localhost",
    user: "juan",
    password: "davinci1.",
    database: "commerce_store"
});

//users APIs
app.get("/user", (req: Request, res: Response) => {
    const { username } = req.body;
    const query = "SELECT * FROM users WHERE username = ?";
    conn.query(query, [username], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.get("/user/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `select * from users where id = ?`;
    conn.query(query, [id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.get("/user/password", (req: Request, res: Response) => {
    const { username } = req.body;
    const query = `SELECT password FROM users WHERE username = ?`;
    conn.query(query, [username], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.post("/user/new", (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const query = `insert into users (username, email, password) values(?, ?, ?)`;
    conn.query(query, [username, email, password], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.patch("/user/update/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    const query = `update users set username = ? , email = ? , password = ? where id = ?`;
    conn.query(query, [username, email, password, id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});


app.delete("/user/delete/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `delete from users were id = ?`;
    conn.query(query, [id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});
app.post("/user/addresses/new", (req: Request, res: Response) => {
    const { user_id, address_1_id, address_2_id, town_id, country_id } = req.body;
    const query = `insert into users_addresses (user_id, address_1, address_2, town_id, country_id) value(?, ?, ?, ?, ?)`;
    conn.query(query, [user_id, address_1_id, address_2_id, town_id, country_id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.get("/user/addresss/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `select * from users_addresses where user_id =?`;
    conn.query(query, [id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.patch("/user/address/update/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const { address_1_id, address_2_id, country_id, town_id } = req.body;
    const query = `update users_addresses set address_1 = ?, address_2 = ?, town_id = ?, country_id = ? where user_id = ?`;
    conn.query(query, [address_1_id, address_2_id, town_id, country_id, id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.delete("/user/address/delete/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `delete from users_addresses * where user_id = ?`;
    conn.query(query, [id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.post("/user/address/default", (req: Request, res: Response) => {
    const { user_id, address_id } = req.body;
    const query = `insert into default_address (user_id, address_id) values(?,?)`;
    conn.query(query, [user_id, address_id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.get("/user/address/default/:id", (req: Request, res: Response) => {
    const { user_id } = req.params;
    const query = `select address_id from default_address where user_id = ?`;
    conn.query(query, [user_id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});
app.patch("/user/address/default/update/:id", (req: Request, res: Response) => {
    const { user_id } = req.params;
    const { address_id } = req.body;
    const query = `update default_address set address = ? where user_id = ?`;
    conn.query(query, [address_id, user_id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

//Product details APIs
app.get("/products", (req: Request, res: Response) => {
    const query = `select id, title, price, description, category_id, image_url from products`;
    conn.query(query, (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.get("/product/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `select * from products where id = ?`;
    conn.query(query, (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.post("/products/new", (req: Request, res: Response) => {
    const { title, price, description, image_url, category_id } = req.body;
    const query = `insert into products (title, price, description, image_url, category_id) values(?,?,?,?,?)`;
    conn.query(query, [title, price, description, image_url, category_id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.patch("/products/update/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, price, description, category_id, image_url } = req.body;
    const query = `update products set title = ?, price = ?, decription = ?, category_id = ?, image_url = ? where id = ?`;
    conn.query(query, [title, price, description, category_id, image_url, id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.delete("/products/delete/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `delete from products where id = ?`;
    conn.query(query, [id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

//Adresses APIs
app.post("/address/new", (req: Request, res: Response) => {
    const { title } = req.body;
    const query = `insert into addresses (title) values(?)`;
    conn.query(query, [title], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.get("/address/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `select * from addresses where id = ?`;
    conn.query(query, [id], (err: Error, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});


app.patch("/address/update/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const { user_id, address_1, address_2, town_id, country_id } = req.body;
    const query = `insert into uses_addresses set user_id`

})
//Country APIs

//listen
app.listen(3000, () => console.log("Server at port 3000!"));