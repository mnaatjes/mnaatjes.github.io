/*---------------------------------------------------------------*/
/**
 * @file src/js/about.js
 * @memberof Portfolio
 * @author mnaatjes
 * @date 11/20/24
 */
/*---------------------------------------------------------------*/
const resume = document.getElementById('resume');

console.log(resume);

/**
 * loop child elements
 */
for(let i = 0; i < resume.children.length; i++){
    /**
     * declare resume item
     */
    let item = resume.children[i];
    /**
     * @listens item#mouseover
     */
    item.addEventListener('mouseover', function(e){
        /**
         * loop items to deselect
         */
        for(let j = 0; j < resume.children.length; j++){
            let child = resume.children[j];
            /**
             * deselect if child /= item
             */
            if(child !== item){
                child.setAttribute('data-state', 'inactive');
            } else {
                child.setAttribute('data-state', 'active');
            }
        }
    })
}