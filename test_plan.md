# QA Automation Challenge - Test Plan

**Candidate:** Uda Kandage Sanjaya Dilhan Ekanayake  
**Email:** sanjayaekanayakeukd@gmail.com

## Test Scope
This test plan covers API testing for a basic Node.js + Express CRUD app.

## Features to be Tested
- Login (POST /login)
- Get Items (GET /items)
- Create Item (POST /items)
- Update Item (PUT /items/:id)
- Delete Item (DELETE /items/:id)

## Types of Testing
- Positive and negative tests
- Data validation
- Response code checks

## Tools
- Postman
- Supertest + Jest
- GitHub Actions for CI

## Notes
All endpoints return appropriate HTTP status codes and handle errors.
