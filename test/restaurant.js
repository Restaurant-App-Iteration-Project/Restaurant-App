const expect = require('expect.js');
const restaurant = require('../server.js');
const request = require('supertest');
const mongoose = require('mongoose');

const HOST = 'http://localhost:3000';

describe('Requests to /restaurantList', () => {
    describe('GET', () => {
      it('response with restaurant list, 200 status, and application/json content type', done => {
        request(HOST)
          .get('/restaurantList')
          .end((err, res) => {
            console.log(res.status)
            expect('Content-Type', /application\/json/);
            expect(res.body[0]).to.include.keys('username');
            expect(res.body[0]).to.include.keys('password');
            expect(res.body[0]).to.include.keys('name');
            expect(res.body[0]).to.include.keys('phoneNumber');
            expect(res.body[0]).to.include.keys('address');
            expect(res.body[0]).to.include.keys('image');
            expect(res.body[0]).to.include.keys('waitTime');
            expect(res.status).to.be.ok(200);
            done();
          })
      });
    });
    describe('POST', () => {
      it('response with restaurant list, 200 status, and application/json content type', done => {
        request(HOST)
          .post('/restaurant')
          .send({
            "username": "Test Case 2",
            "password": "xxxxxxxx",
            "name": "Codsmith 2.0",
            "phoneNumber": "911",
            "address": "5300 Beethoven St",
            "image": "https://www.codesmith.io/images/fullstack-software-engineering-educations.jpg",
            "waitTime": 5
          })
          .end((err, res) => {
            expect('Content-Type', /application\/json/);
            expect(res.body).to.include.keys('username');
            expect(res.body).to.include.keys('password');
            expect(res.body).to.include.keys('name');
            expect(res.body).to.include.keys('phoneNumber');
            expect(res.body).to.include.keys('address');
            expect(res.body).to.include.keys('image');
            expect(res.body).to.include.keys('waitTime');
            expect(res.status).to.be.ok(200);
            done();
          });
      });
      it('response with Error, 400 status, and application/json content type', done => {
        request(HOST)
          .post('/restaurant')
          .send({
            'username': 'Test Case 1',
          })
          .end((err, res) => {
            expect('Content-Type', /application\/json/);
            expect(res.body).to.eql('Error');
            expect(res.status).to.be.ok(400);
            done();
          })
      });
    });
});
