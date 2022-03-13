class TestController {
    async test(req, res) {
        res.send("Login");
    }
}

module.exports = new TestController;