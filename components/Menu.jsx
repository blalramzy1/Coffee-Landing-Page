import MenuItem from "./MenuItem";
import Separator from "./separator"

const menuItem = [ 
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Espresso",
        descrption: "Rich and bold shot of coffee",
        price: 3.3,
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Cppuccino",
        descrption: "Cppuccino with streamed milk and foam",
        price: 4.5,
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Latte",
        descrption: "Latte with streamed milk and foam",
        price: 6.5,
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Americano",
        descrption: "Americano with hot water",
        price: 4.5,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Mochiato",
        descrption: "Mochiato with chocolate and steamed milk",
        price: 8.5,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Flat White",
        descrption: "Mocha with chocolate and steamed milk",
        price: 3.5,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Iced Coffee",
        descrption: "Mocha with chocolate and steamed milk",
        price: 33.5,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Affogato",
        descrption: "Affogato shot over vanilla ice cream",
        price: 11.5,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Irish",
        descrption: "Coffee with Irish whiskey and cream",
        price: 9.5,
    },
];

const Menu = () => {
  return (
    <section className="pt-12 pb-16 lg:pt-16 lg:pb-36">
        <div className=" container mx-auto">
            <div className="flex flex-col gap-4 mb-12 lg:mb-24">
                <h2 className="h2 text-center">Our Menu</h2>
                <div className="mb-4">
                    <Separator bg="#A67B5B"/>
                </div>
                <p className="text-center max-w-[620px] mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, modi, officia debitis eos quos veniam ea, facilis nam aliquid quasi necessitatibus. Minus.</p>
            </div>
            <div className="flex flex-col items-center gap-12 lg:gap-24">
                {/* menu */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
                    {menuItem.map((item,index) => {
                        const {name, descrption, price, imgSrc} = item;
                        return (
                            <MenuItem name={name} descrption={descrption} price={price} imgSrc={imgSrc}/>
                        )
                    })}
                </div>
                <button className="btn">View Full menu</button>
            </div>
        </div>
    </section>
  )
}

export default Menu