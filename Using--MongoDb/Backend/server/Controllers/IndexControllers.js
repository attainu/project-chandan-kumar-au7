module.exports = {
  // -----------------user Register--------------------

  Index: (req, res) => {
    try {
      return res.status(200).json({
        messaage: "this is index ",
        route: "/",
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
};
