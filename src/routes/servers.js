import { Router } from "express";

const router = Router();


router.get('/', (req, res) => {
  res.render('pug/pages/index')
});

router.get('/book', (req, res) => {
  res.render('pug/pages/book')
});

//module.exports = router;
export default router;