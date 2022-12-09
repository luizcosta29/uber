import './styles.css';
import { hospitais } from '../../mock/hospitais';

function Card() {
    return (
        <div className="content">
            <table className="rTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Endereco</th>
                    <th>Solicitar Uber</th>
                </tr>
            </thead>
            <tbody>
                {hospitais.map((item: { id: number; nome: string ; endereco: string; latitude: string ; longitude: string }) => (
                        <tr key={item.id} >
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.endereco}</td>
                            <td><a href={`https://m.uber.com/ul/?action=setPickup&pickup[latitude]=my_location&pickup[longitude]=my_location&pickup[nickname]=my_location&dropoff[latitude]=${item.latitude}&dropoff[longitude]=${item.longitude}&dropoff[nickname]=${item.nome}`}>Ir<a/></a></td>
                        </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
export default Card;