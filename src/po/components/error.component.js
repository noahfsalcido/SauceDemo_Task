class ErrorComponent {
    
    get container() {
        return $('.error-message-container h3');
    }

    async getText(){
        return await this.container.getText();
    }

    async isDisplayed(){
        return await this.container.isDisplayed();
    }
}

module.exports = new ErrorComponent();