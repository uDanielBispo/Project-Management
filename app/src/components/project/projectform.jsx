import Style from './projectform.module.css';

function ProjectForm() {
    function enviar(){
        console.log("ENVIADO!");
    }

    return (
        <form onSubmit={enviar}>
            <div>
                <input type="text" name="nomeProjeto" id="nomeProjeto" />
            </div>
            <div>
                <input type="number" name="orcamento" id="orcamento" />
            </div>
            <div>
                <select name="categoria" id="categoria">
                    <option disabled selected>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    );
};

export default ProjectForm;