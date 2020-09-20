export const Index = (req, res) => {
  res.status(200).json({
    messaage: "this is index ",
    route: "/",
  });
};
