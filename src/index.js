import express from 'express'
import connectDB from './db/dbConnected.js'
import dotenv from 'dotenv'

dotenv.config({
    path:"./env" 
})

connectDB()