1. Used CJS (common js ) file structure for the project.
2. Installed several packages like nodemon, dotenv,mongoose,bcrypt,etc.
3. created database file inside config folder to connect with Mongodb and mongoose is used for wtiting schemas.
4. authcontroller is created for user authentation - to register a new user and to login an already existing user.
4. Cartcontroller is created for adding products in the cart ,changing info.
     of the products in the cart and deleating some product from cart.
5. productcontroller is being used for getting all products by typing /api/products and by 
    /api/products/:id some specific product can be fetched (get).
6. Middleware is used for verification of the user if its an alreading existing user or a new user.
7. In models cart,products and user are created , to have their schemas of data entered.
8. In routes the routes (paths) are created that defines how some functioning for getting putting deleting can be done from url.
