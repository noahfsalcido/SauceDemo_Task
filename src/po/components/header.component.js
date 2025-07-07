class HeaderComponent {

    get container() {
        return $('.header_label .app_logo');//#header_container > div.primary_header > div.header_label > div
    }

    get shopcart(){
        return $('[data-test="shopping-cart-link"]')
    }

    get dropdownMenu(){
        return $('[data-test="open-menu"]')
    }

    async getText(){
        await this.container.waitForDisplayed({timeout:25000});
        return await this.container.getText();
    }

}

module.exports = new HeaderComponent();