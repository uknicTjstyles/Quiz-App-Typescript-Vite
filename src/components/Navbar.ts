export const Navbar = (): HTMLElement =>{

    const Navbar = document.createElement('div');
    Navbar.innerHTML = `
            <div class='bg-blue-600 px-[3rem] rounded-md shadow-black'>
                    card tryout
            </div>
    
    `

    return Navbar;



}