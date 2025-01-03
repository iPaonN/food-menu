document.addEventListener('DOMContentLoaded', function () {
    const items = [
        {
            title: 'Lasagna alla Bolognese',
            imgSrc: 'https://images.unsplash.com/photo-1713802611143-d14c927e2217?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Layered pasta with meat sauce and béchamel.',
            price: '$12.99'
        },
        {
            title: 'Pasta al Pesto',
            imgSrc: 'https://images.unsplash.com/photo-1522666257812-173fdc2d11fe?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Pasta tossed with basil pesto sauce.',
            price: '$12.99'
        },
        {
            title: 'Spaghetti alla Carbonara',
            imgSrc: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Pasta with egg, pancetta, and cheese.',
            price: '$12.99'
        },
        {
            title: 'Risotto alla Milanese',
            imgSrc: 'https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Creamy rice flavored with saffron.',
            price: '$12.99'
        },
        {
            title: 'Fettuccine Alfredo',
            imgSrc: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Pasta in a creamy Parmesan sauce.',
            price: '$14.99'
        },
        {
            title: 'Ravioli',
            imgSrc: 'https://images.unsplash.com/photo-1636475735446-bfc801fa6f2c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Stuffed pasta, often with cheese or spinach.',
            price: '$12.99'
        },
        {
            title: 'Tortellini in Brodo',
            imgSrc: 'https://images.unsplash.com/photo-1679735385873-bf12b01bac2b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Stuffed pasta rings served in broth.',
            price: '$10.99'
        },
        {
            title: 'Gnocchi al Pomodoro',
            imgSrc: 'https://images.unsplash.com/photo-1593003290701-d5e71453a85a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Soft potato dumplings in tomato sauce.',
            price: '$10.99'
        },
        {
            title: 'Pasta e Fagioli',
            imgSrc: 'https://media.istockphoto.com/id/2149542586/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/pasta-fazool.jpg?s=1024x1024&w=is&k=20&c=ACMlThWcY6sV5UF8-dKERqziC_hPV1wO2EXKBxMeeHg=',
            description: 'Hearty pasta and bean soup.',
            price: '$8.00'
        },
        {
            title: 'Cacio e Pepe',
            imgSrc: 'https://media.istockphoto.com/id/1787294732/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/tagliatelle-cacio-pepe-%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94.jpg?s=1024x1024&w=is&k=20&c=trolQCn4PQFB0TRIQxaT3inrBXE_NCTvZf3aJoH9_E0=',
            description: 'Pasta with Pecorino cheese and black pepper.',
            price: '$11.99'
        },
        {
            title: 'Bruschetta',
            imgSrc: 'https://plus.unsplash.com/premium_photo-1677686707466-2c86b174d072?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Toasted bread topped with tomatoes, garlic, and olive oil.',
            price: '$4.99'
        },
        {
            title: 'Caprese Salad',
            imgSrc: 'https://plus.unsplash.com/premium_photo-1677619680535-c3d453823b9e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Fresh mozzarella, tomatoes, and basil drizzled with olive oil.',
            price: '$6.99'
        },
        {
            title: 'Arancini',
            imgSrc: 'https://plus.unsplash.com/premium_photo-1667807521010-5a3210f2ab7d?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Fried rice balls stuffed with cheese or meat.',
            price: '$5.99'
        },
        {
            title: 'Supplì',
            imgSrc: 'https://media.istockphoto.com/id/1254585978/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/suppl%C3%AC-%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%AD%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B8%A5%E0%B8%B5-%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%8A%E0%B8%B4%E0%B8%94.jpg?s=1024x1024&w=is&k=20&c=-5k3WMF76jXIWaP1wpGdknXs24BD4vdRipkj7xkMK-U=',
            description: 'Roman rice croquettes with a mozzarella core.',
            price: '$7.99'
        },
        {
            title: 'Frittata di Zucchine',
            imgSrc: 'https://media.istockphoto.com/id/514792486/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%84%E0%B8%82%E0%B9%88%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%9A%E0%B8%99%E0%B9%81%E0%B8%9C%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B0%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=ypG0pXDint84coFfXqVbQ2qHW-NV-ajhOmXlNKptQH8=',
            description: 'Zucchini omelet, light and savory',
            price: '$9.99'
        },
        {
            title: 'Carpaccio',
            imgSrc: 'https://plus.unsplash.com/premium_photo-1713803867340-d81ffb327bf9?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Thinly sliced raw beef or fish with olive oil and lemon.',
            price: '$10.99'
        },
        {
            title: 'Crostini',
            imgSrc: 'https://plus.unsplash.com/premium_photo-1690214492005-7609f008a287?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Small toasted bread slices with various toppings.',
            price: '$6.99'
        },
        {
            title: 'Prosciutto e Melone',
            imgSrc: 'https://media.istockphoto.com/id/1071051798/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B8%A5%E0%B8%B5-prosciutto-crudo-%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%88%E0%B8%B2%E0%B8%A1%E0%B8%87%E0%B8%AA%E0%B9%80%E0%B8%9B%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B9%81%E0%B8%9C%E0%B9%88%E0%B8%99%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=Yyim5DqRSe8TOHYe3m3In0N9y4rhvatjIUOOcs9XQ9I=',
            description: 'Sweet cantaloupe paired with salty cured ham.',
            price: '$6.99'
        },
        {
            title: 'Insalata di Mare',
            imgSrc: 'https://media.istockphoto.com/id/1405390198/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A5%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%9C%E0%B8%AA%E0%B8%A1%E0%B8%AD%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%99-insalata-di-mare-calamari-%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87-%E0%B8%AB%E0%B8%AD%E0%B8%A2-%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%97%E0%B8%A8.jpg?s=1024x1024&w=is&k=20&c=fWA3n1ZgxeJuxab9wij5Sdngp0nyBO75sCbwNtqQhUU=',
            description: 'Seafood salad with shrimp, squid, and mussels.',
            price: '$20.99'
        },
        {
            title: 'Bresaola',
            imgSrc: 'https://media.istockphoto.com/id/2152603569/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%80%E0%B8%94%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B8%B4%E0%B8%9A-bresaola.jpg?s=1024x1024&w=is&k=20&c=OSk9ssAlWRaFZjS-Mh42FGkJvqfavyIeRuGtYweEFTs=',
            description: 'Air-dried, salted beef slices served with lemon and arugula.',
            price: '$15.99'
        },
        {
            title: 'Saltimbocca alla Romana',
            imgSrc: 'https://media.istockphoto.com/id/1824327397/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/saltimbocca-alla-romana-%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%99.jpg?s=1024x1024&w=is&k=20&c=7X4kKitAiiQK4ThYjaHhI0R5JLUv-xNOT82ldvcNPlc=',
            description: 'Veal with prosciutto and sage.',
            price: '$19.99'
        },
        {
            title: 'Ossobuco alla Milanese',
            imgSrc: 'https://media.istockphoto.com/id/1864220646/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%99-ossobuco-%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%95%E0%B8%B8%E0%B9%8B%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%9F%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%A3%E0%B8%B4%E0%B8%8B%E0%B8%AD%E0%B8%95%E0%B9%82%E0%B8%95%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B9%89%E0%B8%B2%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%99-alla.jpg?s=1024x1024&w=is&k=20&c=BO6WtpBHX9ccvbUPf22dicag_lBOkF0aQpLB0g36MZE=',
            description: 'Slow-cooked veal shank with a rich sauce.',
            price: '$22.99'
        },
        {
            title: 'Pollo alla Cacciatora',
            imgSrc: 'https://media.istockphoto.com/id/1133783242/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A5%E0%B9%88%E0%B8%B2.jpg?s=1024x1024&w=is&k=20&c=m4frjEYANmUr5GG_7Emk45u3Bf1rHHZox2bGl6smVmA=',
            description: 'Hunter-style chicken with tomato and herbs.',
            price: '$16.99'
        },
        {
            title: 'Cotoletta alla Milanese',
            imgSrc: 'https://media.istockphoto.com/id/1057832648/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B0%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%B4%E0%B8%A5%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%9F%E0%B8%A3%E0%B8%99%E0%B8%8A%E0%B9%8C%E0%B8%9F%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B9%8C%E0%B8%9A%E0%B8%99%E0%B8%88%E0%B8%B2%E0%B8%99-%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%A3%E0%B8%B2%E0%B8%9A.jpg?s=1024x1024&w=is&k=20&c=Vatv8RgAgduITnTrNQnvmwyUx5aGohY6c_nw0M5Nrx0=',
            description: 'Breaded veal cutlet, fried until crispy.',
            price: '$18.99'
        },
        {
            title: 'Bistecca alla Fiorentina',
            imgSrc: 'https://media.istockphoto.com/id/1431115187/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%81%E0%B8%9F%E0%B8%A5%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%99%E0%B9%8C-%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%81%E0%B8%97%E0%B8%B5%E0%B9%82%E0%B8%9A%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B2%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=6X19SoYKxm4lwla4AXk_0_8atlfJxOmW7-zdLp9rD8o=',
            description: 'Thick T-bone steak grilled to perfection.',
            price: '$49.99'
        },
        {
            title: 'Fritto Misto',
            imgSrc: 'https://images.unsplash.com/photo-1727522793234-2e108fc0460b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Mixed fried seafood and vegetables.',
            price: '$21.99'
        },
        {
            title: 'Vitello Tonnato',
            imgSrc: 'https://media.istockphoto.com/id/1995512834/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/vitello-tonnato.jpg?s=1024x1024&w=is&k=20&c=UoTEHY8_qpEupuGKoU8RSnfwshx2PHaB-SoJw2Nf0Dk=',
            description: 'Sliced veal with a creamy tuna sauce.',
            price: '$19.99'
        },
        {
            title: 'Agnello al Forno',
            imgSrc: 'https://media.istockphoto.com/id/1349273747/it/foto/costolette-di-agnello-alla-griglia-e-patate-in-una-vista-deliziosa.jpg?s=612x612&w=0&k=20&c=AGzavz2drYl-CKrRnO47HQm6STssziFqn-wk80mjRv4=',
            description: 'Oven-roasted lamb with rosemary.',
            price: '$22.99'
        },
        {
            title: 'Scaloppine al Limone',
            imgSrc: 'https://media.istockphoto.com/id/182676609/photo/veal-piccata.jpg?s=612x612&w=0&k=20&c=aVfKPtINYDSd-qU07CFLUrYvTzf5jVBxw4R-ieceCbU=',
            description: 'Thin veal slices in lemon sauce.',
            price: '$18.99'
        },
        {
            title: 'Branzino al Forno',
            imgSrc: 'https://media.istockphoto.com/id/913410788/it/foto/branzino-al-forno-con-limone-e-rosmarino.jpg?s=612x612&w=0&k=20&c=DDECwdqRcfPp_9_HyTQdrkyRysw3BPFSBK-Pv59ooTc=',
            description: 'Oven-baked sea bass with herbs.',
            price: '$25.99'
        },
        {
            title: 'Patate al Forno',
            imgSrc: 'https://media.istockphoto.com/id/1457726309/it/foto/patate-al-forno-caricate-fatte-in-casa.jpg?s=612x612&w=0&k=20&c=NB02YHbufhK2cFxt-jjPvoEhGfWakVGRMT7QFVkc4y8=',
            description: 'Roasted potatoes with rosemary.',
            price: '$6.99'
        },
        {
            title: 'Caponata',
            imgSrc: 'https://media.istockphoto.com/id/522848794/photo/italian-appetizer-caponata-close-up-on-a-wooden-plate-horizontal.jpg?s=612x612&w=0&k=20&c=YRLPPMm_cFoRWmSDbxwuLovgQPcIfhTg5Pi17PoPv8I=',
            description: 'Eggplant stew with sweet and sour flavors.',
            price: '$8.99'
        },
        {
            title: 'Fagiolini Aglio e Olio',
            imgSrc: 'https://media.istockphoto.com/id/1388417437/photo/homemade-italian-spaghetti-algio-e-olio.jpg?s=612x612&w=0&k=20&c=gocHozUlPyNStETLkDTqU5uTOQYDWLXLa8_FCb_yCjM=',
            description: 'Green beans sautéed with garlic and olive oil.',
            price: '$7.99'
        },
        {
            title: 'Insalata Verde',
            imgSrc: 'https://media.istockphoto.com/id/188099381/it/foto/insalata-mista-con-verdure-fresche.jpg?s=612x612&w=0&k=20&c=6aViwTaYx4-B5XkjD30VuXxViU8CwT2pCnCfzxVkhXk=',
            description: 'Simple green salad.',
            price: '$5.99'
        },
        {
            title: 'Zucchine Fritte',
            imgSrc: 'https://media.istockphoto.com/id/545343838/it/foto/zucchine-fritte-in-pastella.jpg?s=612x612&w=0&k=20&c=PSZ7JX24_LmLxiZ7dr7qBUzg1WtzbtHZm5GHMIVyjC4=',
            description: 'Fried zucchini sticks.',
            price: '$8.99'
        },
        {
            title: 'Carciofi alla Romana',
            imgSrc: 'https://media.istockphoto.com/id/532484871/it/foto/fritto-carciofi.jpg?s=612x612&w=0&k=20&c=rWhxPsCJiORzKgvYGlxQeLBvub8uusa8oKy80uZjLeI=',
            description: 'Roman-style artichokes braised with herbs.',
            price: '$10.99'
        },
        {
            title: 'Peperonata',
            imgSrc: 'https://media.istockphoto.com/id/528496306/photo/italian-cuisine-peperonata-roasted-bell-pepper-with-capers-and-basil.jpg?s=612x612&w=0&k=20&c=GgCDW0_wTu-rSGBgfxSuxhFmpRzP8p_BkyGzCIkUuEU=',
            description: 'Sweet peppers stewed with onions and tomatoes.',
            price: '$9.99'
        },
        {
            title: 'Funghi Trifolati',
            imgSrc: 'https://media.istockphoto.com/id/1297908984/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%97%E0%B8%AD%E0%B8%94-funghi-trifolati-%E0%B9%83%E0%B8%99%E0%B8%88%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=1024x1024&w=is&k=20&c=9nvVHwVEOkFzlJGHoL9gyE_VlCfIRLFV3oFyaY-FEvQ=',
            description: 'Sautéed mushrooms with garlic and parsley.',
            price: '$10.99'
        },
        {
            title: 'Spinaci al Burro',
            imgSrc: 'https://media.istockphoto.com/id/1134144828/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B9%82%E0%B8%82%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%99%E0%B8%A2%E0%B8%A5%E0%B8%B0%E0%B8%A5%E0%B8%B2%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=kqDuLhyCMCYPurVYoolpBDnEbYXrzkjvk_rcjjA3HE8=',
            description: 'Spinach sautéed in butter.',
            price: '$8.99'
        },
        {
            title: 'Polenta',
            imgSrc: 'https://media.istockphoto.com/id/505399206/photo/casserole-of-corn-groats.jpg?s=612x612&w=0&k=20&c=gcCAlDU_W-ynRnnMzyJlFg9EB9zynEpq0P0Qv2PUmjQ=',
            description: 'Creamy cornmeal served as a side.',
            price: '$9.99'
        },
        {
            title: 'Quattro Stagioni',
            imgSrc: 'https://media.istockphoto.com/id/1449564809/photo/homemade-pizza-four-seasons-with-tomatoes-mozzarella-mushrooms-artichokes-ham-and-olives.jpg?s=612x612&w=0&k=20&c=G-hxGwo_IEZ0awef_A3IFT4EoDcmNNAIsxm5U_yYhwM=',
            description: 'Pizza with four different sections of toppings.',
            price: '$14.99'
        },
        {
            title: 'Diavola',
            imgSrc: 'https://media.istockphoto.com/id/2175758433/photo/pizza-diavola.jpg?s=612x612&w=0&k=20&c=DGxHrMogx3Jp5hecmceiLTRdV0WcV7vm5efC7TmI8yM=',
            description: 'Spicy pizza with pepperoni and chili.',
            price: '$13.99'
        },
        {
            title: 'Capricciosa',
            imgSrc: 'https://media.istockphoto.com/id/1205494126/photo/pizza-capricciosa-pizza-all-capricciosa-traditional-italian-pizza-on-wooden-background.jpg?s=612x612&w=0&k=20&c=qR4O17uFy4VKXJPvLPEbpUWMpD6FZegLd696lmAIPtU=',
            description: 'Pizza with ham, artichokes, mushrooms, and olives.',
            price: '$14.99'
        },
        {
            title: 'Napoli',
            imgSrc: 'https://media.istockphoto.com/id/545809208/photo/pizza-with-capers-and-anchovies-called-pizza-napoli.jpg?s=612x612&w=0&k=20&c=NtiCF-dFW8Hdq8iP2aqemyavRoUYOs_f-fvp0v3e0x4=',
            description: 'Pizza with anchovies and capers.',
            price: '$11.99'
        },
        {
            title: 'Bianca',
            imgSrc: 'https://media.istockphoto.com/id/531064304/photo/white-pizza.jpg?s=612x612&w=0&k=20&c=8aiwmytrwerN94nb1Ja_sXcTZB3xFV6z3RTVtOv2RGQ=',
            description: 'White pizza without tomato sauce.',
            price: '$10.99'
        },
        {
            title: 'Sfogliatelle',
            imgSrc: 'https://media.istockphoto.com/id/492842866/photo/sfogliatelle-food.jpg?s=612x612&w=0&k=20&c=oV2MSmBlilXpgAHovn0sRrUM65bJvjND-F1iJl9_DDA=',
            description: 'Pastry with ricotta and citrus filling.',
            price: '$4.99'
        },
        {
            title: 'Cannoli',
            imgSrc: 'https://media.istockphoto.com/id/493068221/photo/italian-cannolis.jpg?s=612x612&w=0&k=20&c=bdbmLJS8V3Em04YWC--t1VVSQ4N64CgzK9BTdRF7VQs=',
            description: 'Crispy shell filled with sweet ricotta cream.',
            price: '$3.99'
        },
        {
            title: 'Tiramisu',
            imgSrc: 'https://media.istockphoto.com/id/541300462/photo/tiramisu-traditional-italian-dessert-on-white-plate-with-italian-flag.jpg?s=612x612&w=0&k=20&c=CwJWvO4djovnTOWjXwbesjLtTuGoxoTzqhOuB8ElXRw=',
            description: 'Layered dessert with coffee-soaked ladyfingers and mascarpone.',
            price: '$6.99'
        },
        {
            title: 'Panna Cotta',
            imgSrc: 'https://media.istockphoto.com/id/1255776846/photo/raspberry-panna-cotta-with-raspberry-jelly-italian-dessert-homemade-cuisine-copy-space.jpg?s=612x612&w=0&k=20&c=TU-mPAtTafCrWcxHrtAO-HjxMkcGgOoG5E6W5l9tJkg=',
            description: 'Creamy dessert topped with fruit or caramel.',
            price: '$5.99'
        },
        {
            title: 'Zabaglione',
            imgSrc: 'https://media.istockphoto.com/id/1477116178/photo/zabaione-or-sabayon-or-advocaat-in-a-champagne-coupe-alcoholic-creamy-drink-or-dessert-cream.jpg?s=612x612&w=0&k=20&c=iCfRtoellXKsWyFAL0Rnm0QgcgXwF_JAeKXTdjqj0SA=',
            description: 'Egg custard flavored with Marsala wine.',
            price: '$5.99'
        },
        {
            title: 'Gelato',
            imgSrc: 'https://media.istockphoto.com/id/904530774/photo/woman-hand-holding-ice-cream.jpg?s=612x612&w=0&k=20&c=43yiQwWT1EnM-BPfLe121KDtRNZhfxVOpR7WuW-fGqk=',
            description: 'Rich and creamy Italian ice cream.',
            price: '$4.99'
        },
        {
            title: 'Granita',
            imgSrc: 'https://media.istockphoto.com/id/995295632/photo/granita-a-typical-sweet-dessert-from-sicily-based-on-fruit.jpg?s=612x612&w=0&k=20&c=y06OQEPreX0aY_95kFOpbLTZ77BLXjWwQPThS7zD2C8=',
            description: 'Semi-frozen dessert made with sugar and fruit.',
            price: '$3.99'
        },
        {
            title: 'Amaretti',
            imgSrc: 'https://media.istockphoto.com/id/909510204/photo/italian-cranberry-almond-biscotti-and-cup-of-coffee.jpg?s=612x612&w=0&k=20&c=TkCpbuM0mUUxoslm2RhEgatRVr-2SklrXjFL5ftBz1o=',
            description: 'Crunchy almond cookies.',
            price: '$4.99'
        },
        {
            title: 'Crostata',
            imgSrc: 'https://media.istockphoto.com/id/607585236/photo/crostata-italian-homemade-tart.jpg?s=612x612&w=0&k=20&c=KBlaMDva7cpymp6DbHZ76uPirQMBTN8kxqPofMRizew=',
            description: 'Jam-filled tart with a buttery crust.',
            price: '$5.99'
        },
        {
            title: 'Ricciarelli',
            imgSrc: 'https://media.istockphoto.com/id/1466451960/photo/ricciarelli-gluten-free-almond-cookies-italian-christmas-cookies-new-year-decoration.jpg?s=612x612&w=0&k=20&c=vRon_jGJTdCGH1yAFczHc8TMopW4EFqqOngQvZCCNrI=',
            description: 'Soft almond cookies from Siena.',
            price: '$4.99'
        },
        {
            title: 'Babà',
            imgSrc: 'https://media.istockphoto.com/id/453564733/photo/neapolitan-baba-au-rum.jpg?s=612x612&w=0&k=20&c=x0OwyiHh5CuuotkQLVB9xlox5nOGFU_HuSPTsI2lSDI=',
            description: 'Rum-soaked sponge cake.',
            price: '$5.99'
        },
    ];

    const container = document.querySelector('.container');
    if (!container) {
        console.error('Container element not found');
        return;
    }

    items.forEach(item => {
        const box = document.createElement('div');
        box.className = 'box';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const img = document.createElement('img');
        img.className = 'img';
        img.src = item.imgSrc;
        img.alt = item.title;

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = item.price;

        const description = document.createElement('p');
        description.textContent = item.description;

        box.appendChild(title);
        box.appendChild(img);
        box.appendChild(price);
        box.appendChild(description);

        container.appendChild(box);
    });
});