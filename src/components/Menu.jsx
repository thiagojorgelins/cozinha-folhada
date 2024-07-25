import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
    <div>
    <Link to="/cardapio">Cardapio</Link>
    </div>
    
    <div>
        <Link to="/pratosdaestacao">Pratos da estação</Link>
    </div>
    <div>
        <Link to="/espaco">O espaço</Link>
    </div>
    <div>
        <Link to="/FAQ">FAQ de delivery</Link>
    </div>
    <div>
        <Link to="/sobre">Sobre nós</Link>
    </div>
    </>
  );
};

export { Menu };
