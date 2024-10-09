/*------------------------------------------------------------------------------*/
/**
 * @name CaseStudy
 * @type {Class}
 * @namespace CaseStudy
 * @description
 */
/*------------------------------------------------------------------------------*/
class CaseStudy {
    /*------------------------------------------------------*/
    /**
     * @name constructor
     * @type {Method}
     * @memberof CaseStudy
     * @description
     */
    /*------------------------------------------------------*/
    constructor(json){
        this.data       = json;
        this.container  = document.getElementById('case_study_container');
    }
    /*------------------------------------------------------*/
    /**
     * @name createProblemStatement
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createProblemStatement(){
        let section = document.createElement('section');
        section.setAttribute('class', '--case-study__heading --pink');
        // heading
        let h2          = document.createElement('h2');
        h2.innerHTML    = 'Problem Statement';
        // text
        let p       = document.createElement('p');
        let i       = document.createElement('i');
        i.innerHTML = `&quot;${this.data.problem}&quot;`;
        // append
        p.appendChild(i);
        section.appendChild(h2);
        section.appendChild(p);
        // append to container
        this.container.appendChild(section);
    }
    /*------------------------------------------------------*/
    /**
     * @name createUserPersona
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createUserPersona(){
        // article
        let article = document.createElement('article');
        article.setAttribute('class', '--case-study__user-persona --sky');
        // heading
        let h3          = document.createElement('h3');
        h3.innerHTML    = 'User Persona';
        // icon
        let icon_persona        = document.createElement('div');
        icon_persona.innerHTML  = '<i class="fa-regular fa-user"></i>';
        icon_persona.setAttribute('class', '__user-persona__icon');
        // append icon | heading
        article.appendChild(h3);
        article.appendChild(icon_persona);

        // headings - demo
        let heading_demo        = document.createElement('div');
        heading_demo.innerHTML  = '<h5>Demographics</h5>';
        heading_demo.setAttribute('class', '__user-persona__heading');
        // headings - behavior
        let heading_behavior        = document.createElement('div');
        heading_behavior.innerHTML  = '<h5>Behaviors</h5>';
        heading_behavior.setAttribute('class', '__user-persona__heading');
        // demo and behavior
        let grid_demo       = document.createElement('div');
        grid_demo.setAttribute('class', '__user-persona__grid');
        let grid_behavior   = document.createElement('div');
        grid_behavior.setAttribute('class', '__user-persona__grid');
        // loop data
        this.data.persona.forEach(item => {
            // properties
            let icon    = document.createElement('i');
            let p       = document.createElement('p');
            p.innerHTML = item.content;
            // select state
            if(item.type == true){
                // demographic data
                icon.innerHTML = '<i class="fa-solid fa-folder-open"></i>';
                grid_demo.appendChild(icon);
                grid_demo.appendChild(p);
            } else if (item.type == false){
                // behavior data
                icon.innerHTML = '<i class="fa-solid fa-gift"></i>';
                grid_behavior.appendChild(icon);
                grid_behavior.appendChild(p);
            }
        });
        // append behaviors
        article.appendChild(heading_behavior);
        article.appendChild(grid_behavior);
        // append democraphics
        article.appendChild(heading_demo);
        article.appendChild(grid_demo);
        // append to container
        this.container.appendChild(article);
    }
    /*------------------------------------------------------*/
    /**
     * @name createTimeline
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createTimeline(){
        // container
        let article = document.createElement('article');
        article.setAttribute('class', '--case-study__timeline');
        // heading
        let h3 = document.createElement('h3');
        h3.innerHTML = 'Timeline';
        // grid
        let grid = document.createElement('div');
        grid.setAttribute('class', '--timeline__grid');
        // append
        article.appendChild(h3);
        article.appendChild(grid);
        // loop data
        this.data.timeline.forEach(item => {
            // properties
            let heading = document.createElement('h6');
            let icon    = document.createElement('i');
            let text    = document.createElement('small');
            // attributes
            icon.setAttribute('class', 'fa-solid fa-circle-dot');
            // insert data
            heading.innerHTML   = item.time;
            text.innerHTML      = item.content;
            // append elements
            grid.appendChild(heading);
            grid.appendChild(icon);
            grid.appendChild(text);
        });
        // append to container
        this.container.appendChild(article);
    }
    /*------------------------------------------------------*/
    /**
     * @name createTable
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createTable(){
        // properties
        let table   = document.createElement('section');
        let heading = document.createElement('div');
        // attributes
        table.setAttribute('class', '--case-study__table');
        heading.setAttribute('class', '__grid--title');
        heading.innerHTML = '<h3>Comparative Study</h3>';
        // append heading
        table.appendChild(heading);
        // build header
        let grid_head = document.createElement('div');
        grid_head.setAttribute('class', '__grid--head');
        // inject empty first position
        let empty = document.createElement('b');
        grid_head.appendChild(empty);
        // insert data
        this.data.table.headings.forEach(head => {
            // property
            let b       = document.createElement('b');
            b.innerHTML = head;
            // append
            grid_head.appendChild(b);
        });
        // append header to table
        table.appendChild(grid_head);
        // create rows
        this.data.table.rows.forEach(row => {
            let grid_row    = document.createElement('div');
            let title       = document.createElement('b');
            grid_row.setAttribute('class', '__grid--row');
            title.innerHTML = row.id;
            grid_row.appendChild(title);
            // cycle values
            for(let i = 0; i < row.values.length; i++){
                let value   = row.values[i];
                let icon    = document.createElement('i');
                // determine icon
                if(value == true){icon.setAttribute('class', 'fa-solid fa-circle');}
                else if (value == false){icon.setAttribute('class', 'fa-regular fa-circle');}
                // append
                grid_row.appendChild(icon);
            }
            // append row to table
            table.appendChild(grid_row);
        });
        // append table to container
        this.container.appendChild(table);
    }
    /*------------------------------------------------------*/
    /**
     * @name createDesign
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createDesign(){
        let article = document.createElement('article');
        let heading = document.createElement('h3');
        let grid    = document.createElement('div');
        let img_01  = document.createElement('img');
        let img_02  = document.createElement('img');
        // apply styles
        article.setAttribute('class', '--case-study__inspiration --grey');
        grid.setAttribute('class', '__inspiration__grid');
        // add content
        heading.innerHTML = 'Design Inspiration';
        img_01.setAttribute('src', this.data.design[0].img_src);
        img_02.setAttribute('src', this.data.design[1].img_src);
        img_01.setAttribute('alt', this.data.design[0].img_alt);
        img_02.setAttribute('alt', this.data.design[1].img_alt);
        // append elements
        grid.appendChild(img_01);
        grid.appendChild(img_02);
        article.appendChild(heading);
        article.appendChild(grid);
        // append to container
        this.container.appendChild(article);
    }
    /*------------------------------------------------------*/
    /**
     * @name createTech
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createTech(){
        // elements
        let article     = document.createElement('article');
        let heading     = document.createElement('h3');
        let heading_dev = document.createElement('div');
        let heading_sys = document.createElement('div');
        let icon_main   = document.createElement('div');
        let icon_dev    = document.createElement('i');
        let icon_sys    = document.createElement('i');
        // add class to elements
        article.setAttribute('class', '--case-study__tech');
        heading_dev.setAttribute('class', '__tech__heading');
        heading_sys.setAttribute('class', '__tech__heading');
        icon_main.setAttribute('class', '__tech__icon');
        icon_dev.setAttribute('class', 'fa-solid fa-mobile');
        icon_sys.setAttribute('class', 'fa-solid fa-gear');

    }
}

let test = new CaseStudy(json_case_study);
test.createProblemStatement();
test.createUserPersona();
test.createTimeline();
test.createTable();
test.createDesign();