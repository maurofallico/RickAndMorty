const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de Rutas", () => {
    it("Responde con status: 200", async () => {
        await agent.get('/rickandmorty/character/1').expect(200)
    })

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
        const { body } = await agent.get('/rickandmorty/character/1')
        expect (body).toHaveProperty('id')
        expect (body).toHaveProperty('name')
        expect (body).toHaveProperty('species')
        expect (body).toHaveProperty('gender')
        expect (body).toHaveProperty('status')
        expect (body).toHaveProperty('origin')
        expect (body).toHaveProperty('image')
    })

    it('Si hay un error responde con status: 500', async () => {
        await agent.get('/rickandmorty/character/999').expect(500)
    })
})

describe("GET /rickandmorty/login", () => {
    it("Responde con true para las credenciales correctas", async () => {
        const { body } = await agent.get(`/rickandmorty/login?email=maurofallico@gmail.com&password=123456`)
        expect(body).toEqual({
            access: true
        })
    })

    it("Responde con false para las credenciales incorrectas", async () => {
        const { body } = await agent.get(`/rickandmorty/login?email=sarasa@gmail.com&password=456789`)
        expect(body).toEqual({
            access: false
        })
    })
})

describe("POST /rickandmorty/fav", () => {
    const char1 = {id: 1, name: "Mauro"}
    const char2 = {id: 2, name: "Melisa"}
    it("Devuelve un array con el personaje", async () => {
        const { body } = await agent.post('/rickandmorty/fav').send(char1)
        expect(body).toContainEqual(char1)

    })
    it("Al enviar más de un elemento, devuelve todos los elementos", async () => {
        const { body } = await agent.post('/rickandmorty/fav').send(char2)
        expect(body).toContainEqual(char1)
        expect(body).toContainEqual(char2)
    })
})

describe("DELETE /rickandmorty/fav/:id", () => {
    const char1 = {id: 1, name: "Mauro"}
    const char2 = {id: 2, name: "Melisa"}
    it("Si no se encuentra el ID, devuelve un array con todos los personajes", async () => {
        const { body } = await agent.delete(`/rickandmorty/fav/3`)
            expect(body).toContainEqual(char1)
            expect(body).toContainEqual(char2)
    })
    it("Si se envía un ID válido, se elimine correctamente del array", async () => {
        const { body } = await agent.delete('/rickandmorty/fav/1')
            expect(body).not.toContainEqual(char1)
    })
})