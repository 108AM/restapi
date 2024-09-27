const express = require('express')
const router = express.Router()

//Getting all
router.get('/',(req, res) => {
    res.send('hello world')
})
//getting one
router.get('/:id',(req, res) => {
})
//creating one
router.post('/:id',(req, res) => {
})
//updating one
router.patch('/',(req, res) => {
})
//deleting one
router.delete('/:id',(req, res) => {
})
