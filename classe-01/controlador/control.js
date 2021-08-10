const instanciaAxios = require("../servicos/empresas");
const fs = require("fs/promises");

const buscarEmpresa = async (req, res) => {
    const { dominioEmpresa } = req.params;

    try {
        const pedido = await instanciaAxios.get(``, {
            params: {
                domain: dominioEmpresa
            }
        })

        const result = pedido.data

        const lerInfo = JSON.parse(await fs.readFile('./classe-01/dados/empresas.json'))

        if (result.name && !lerInfo.includes(result)) {
            lerInfo.push(result)
            fs.writeFile('./classe-01/dados/empresas.json', JSON.stringify(lerInfo, null, 2))
        }

        return res.json(result)

    } catch (error) {
        res.json(error)
    }


}

module.exports = { buscarEmpresa };