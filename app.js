"use strict";
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(helmet());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

app.use((req, res, next) => {
    res.setHeader('X-XSS-Protection', '1: mode=block');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Content-Security-Policy', 'script-src "self"');
    next();
});

const root = express();

const contextPath = '/api';

root.use(contextPath, app);

module.exports = { app, root };