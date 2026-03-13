import supertest from "supertest";
import { web } from "../src/application/web.js"
import { prisma } from "../src/lib/prisma.js";
import { logger } from "../src/application/logging.js";

describe('POST /api/users', () => {
    afterEach(async () => {
        await prisma.user.deleteMany({
            where: {
                username: 'soeryadana'
            }
        })
    })

    it('should can register new user', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'soeryadana',
                password: 'secret',
                name: 'Soeryadana'
            })

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('soeryadana');
        expect(result.body.data.name).toBe('Soeryadana');
        expect(result.body.data.password).toBeUndefined();
    });

    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: '',
                password: '',
                name: ''
            });

        logger.info(result.body);

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it('should can reject if username already registered', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'soeryadana',
                password: 'secret',
                name: 'Soeryadana'
            })

        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('soeryadana');
        expect(result.body.data.name).toBe('Soeryadana');
        expect(result.body.data.password).toBeUndefined();

        result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'soeryadana',
                password: 'secret',
                name: 'Soeryadana'
            })

        logger.info(result.body);

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});