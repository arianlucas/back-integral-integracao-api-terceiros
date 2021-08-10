const instanciaAxios = require("../servicos/geolocalizar");
const fs = require("fs/promises")

const localizarIp = async (req, res) => {
    const { pais, ip } = req.params;

    const votos = JSON.parse(await fs.readFile("classe-02/dados/votos.json"))


    try {

        const infos = await instanciaAxios.get(``, {
            params: {
                ip_address: ip
            }
        })

        const result = infos.data

        if (!result.country) {
            res.status(400).json({
                erro: "O IP digitado não é válido"
            })
        }

        if (pais.toLowerCase() !== result.country.toLowerCase()) {
            res.status(400).json({
                erro: "O IP digitado não coincide com o país da votação"
            })
        } else {
            res.json("O voto foi válido")
            votos.push({
                ip: ip,
                voto: req.body.voto
            })

            fs.writeFile("classe-02/dados/votos.json", JSON.stringify(votos, null, 2))
        }

    } catch (error) {
        res.json(error)
    }

}

const verVotos = async (req, res) => {
    const votos = JSON.parse(await fs.readFile("classe-02/dados/votos.json"))
    res.json(votos);
}


module.exports = { localizarIp, verVotos };