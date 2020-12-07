// The generic dom container element class
class DOMContainer{
    constructor(objectHint){
        if (typeof objectHint.tagName === 'undefined'){
            // Then the hint is a query string
            this.element = document.querySelector(objectHint);
        }else{
            // else it is an actual element
            this.element = objectHint;
        }
        this.element.style.transitionProperty = 'opacity';
        this.styleTransitionDuration = 500;
        this.element.style.transitionDuration = `${this.styleTransitionDuration}ms`;
    }

    appendChildWithStyle(elementItem){
        this.element.appendChild(elementItem);
        elementItem.style.animationPlayState = 'running';
        elementItem.addEventListener('animationend', function(e){
            this.style.animationName = 'remove-yourself';
            this.style.animationPlayState = 'paused';
        });
    };

    getNthChild(n){
        return this.element.children[n-1];
    };

    removeChildWithStyle(elementItem){
        elementItem.style.animationPlayState = 'running';
        elementItem.addEventListener('animationend', function(e){
            this.remove();
        });
    };

    changeInnerHtmlWithStyle(newHTML){
        // Capturing the element due to some referrence issues
        const element = this.element;
        // Now making it disappear
        element.style.opacity = '0';
        // When the transition end, this function will be called
        function changeHTML(){
            // This function is a timeout callback
            element.innerHTML = newHTML;
            element.style.opacity = '1';
        }
        setTimeout(changeHTML, this.styleTransitionDuration);
    }
}

// The specific unordered list
class UnorderedList extends DOMContainer{
    constructor(queryString){
        super(queryString);
    }

    createAppendChild(message){
        const item = document.createElement('li');
        item.innerHTML = message;
        item.className = 'container-item';
        this.appendChildWithStyle(item);
    };
}


let mainUL = new UnorderedList('.container');

let items = ['Ali', 'Usman', 'Junaid']
items.forEach(function(item){
    mainUL.createAppendChild(item);
});