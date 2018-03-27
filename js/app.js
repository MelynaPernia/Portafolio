let begin = () => {
    // const itemMenu = document.getElementById('item-about-me')
    // const itemMenu = document.getElementById('item-skill')
    // const itemMenu = document.getElementById('item-projects')
    // const itemMenu = document.getElementById('item-contact-me')
    const itemMenu = document.querySelector('.nav-item')
    console.log(itemMenu)
    function scrollWin() {
        window.scrollTo(500, 0);
    }
    itemMenu.addEventListener('click', (e)=>{
console.log(e);
// window.scrollTo(300, 500);

    }
        
    )

    // console.log(itemMenu)
    // itemMenu.addEventListener('click', () =>{
    //     // console.log(e.target)
    //     // document.getElementById('about-me').style.color = 'red';
    //     document.getElementById('about-me').style.paddingTop = '12vh';
    //     console.log(document.getElementById('about-me'))
    // })
    // itemMenu.addEventListener('click', () =>{
    //     // console.log(e.target)
    //     // document.getElementById('about-me').style.color = 'red';
    //     document.getElementById('item-skill').style.paddingTop = '12vh';
    //     console.log(document.getElementById('about-me'))
    // })
    // itemMenu.addEventListener('click', () =>{
    //     // console.log(e.target)
    //     // document.getElementById('about-me').style.color = 'red';
    //     document.getElementById('item-skill').style.paddingTop = '12vh';
    //     console.log(document.getElementById('about-me'))
    // })
    // itemMenu.addEventListener('click', () =>{
    //     // console.log(e.target)
    //     // document.getElementById('about-me').style.color = 'red';
    //     document.getElementById('item-skill').style.paddingTop = '12vh';
    //     console.log(document.getElementById('about-me'))
    // })
}
window.addEventListener('load', begin);