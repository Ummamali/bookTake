// This file contains all the import classes


// The main book class
function Book(name, author, isbn){
    this.name = name;
    this.author = author;
    this.isbn = isbn;
}
Book.prototype.returnElement = function(){
    const tr = document.createElement('tr');
    const attributes = [this.name, this.author, this.isbn];
    attributes.forEach(function(item, i){
        let td = document.createElement('td');
        let textNode = document.createTextNode(item);
        td.appendChild(textNode);
        if (i === 2){
            const icon = document.createElement('i');
            icon.className = 'fas fa-times';
            td.className = 'cross-container';
            td.appendChild(icon);
        }
        tr.appendChild(td);
    });
    return tr
};



// the container class for table for books
class TableContainer extends DOMContainer{
    constructor(objectHint,
        appendAnimation = 'append-yourself',
        removeAnimation = 'remove-Yourself',
        animationDuration = 500,
        transitionDuration = 200){
            super(objectHint, appendAnimation, removeAnimation, animationDuration, transitionDuration);
            // capturing this object due to referrence issues
            const thisItem = this;
            this.element.addEventListener('click', function(e){
                const target = e.target;
                if (target.className.includes('fas fa-times')){
                    thisItem.removeElement(target.parentElement.parentElement);
                }
            });
        }

    createAppendChild(bookObject){
        // takes the book object and append it to the table
        this.appendChildWithStyle(bookObject.returnElement());
    }

    removeElement(elementItem){
        this.removeChildWithStyle(elementItem);
    }

}