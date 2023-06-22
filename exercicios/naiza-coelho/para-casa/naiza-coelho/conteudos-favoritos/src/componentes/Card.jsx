import Title from "./Title";
import Image from "./Image";
import Text from "./Text";

function Card(props) {
    return (
        <>
            <div className="card-container">
                <Title text={props.titulo}></Title>
                <Image  image={props.imagem} class="imagem"></Image>
                <Text>{props.descricao}</Text>
            </div>
        </>
    )
}

export default Card;
