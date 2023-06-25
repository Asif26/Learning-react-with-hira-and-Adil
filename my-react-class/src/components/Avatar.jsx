export default function Avatar({person, size}){
    const avatar = `https://i.imgur.com/${person.imageId}.jpg`;
    const description = 'Gregorio Y. Zara';
    const name = person.name

    return(
        <img  className="Avatar" src={avatar} alt={name} height={size} />
    );
}