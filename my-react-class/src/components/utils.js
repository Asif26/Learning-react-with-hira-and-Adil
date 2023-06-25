export function getImageUrl(person,size='s'){
    return(
        'https://i.imgur.com/'+person.imgeId+
        size + 'jpg'
    );
}