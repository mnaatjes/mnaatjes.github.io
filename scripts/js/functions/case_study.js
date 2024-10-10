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
     * @name buildCaseStudy
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    buildCaseStudy(){
        /*
        test.createProblemStatement();
        test.createGridProblem();
        test.createTable();
        test.createGridResearch();
        test.createDesigns();
        test.createConclusion();
        */
       // create checksums
       let exists_title     = this.data.project_title.length > 0;
       let exists_problem   = this.data.problem.length > 0;
       let exists_persona   = this.data.persona.length > 0;
       let exists_timeline  = this.data.timeline.length > 0;
       let exists_table     = this.data.table.rows.length > 0;
       let exists_inspire   = this.data.design.length > 0;
       let exists_tech      = this.data.tech.length > 0;
       let exists_conclude  = this.data.conclusion.takeaways.length > 0;

        // create headings
        let heading_research = this.createHeading('Research &amp; Analysis');
        let heading_design   = this.createHeading('Design Phase');
        // check and append - problem statement
        if(exists_problem){
            this.container.appendChild(this.createProblemStatement());
        }
        // check and append - Problem Grid
        if(exists_persona || exists_timeline){
            this.container.appendChild(this.createGridProblem());
        }
        // check and append - table
        if(exists_table){
            this.container.appendChild(this.createTable());
        }
        // check and append - Research Grid
        if(exists_inspire || exists_tech){
            this.container.appendChild(this.createGridResearch());
        }
        // check and append - Designs
        if(this.createDesigns()){
            this.container.appendChild(this.createDesigns());
        }
        // check and append - Conclusion
        if(exists_conclude){
            this.container.appendChild(this.createConclusion());
        }
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
        return section;
    }
    /*------------------------------------------------------*/
    /**
     * @name createHeading
     * @type {Method}
     * @memberof
     * @description
     * @param {String} title
     */
    /*------------------------------------------------------*/
    createHeading(title){
        // define elements
        let section = document.createElement('section');
        let heading = document.createElement('h1');
        // append content and items
        heading.innerHTML = title;
        section.appendChild(heading);
        // append to container
        return section;
    }
    /*------------------------------------------------------*/
    /**
     * @name createGridProblem
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createGridProblem(){
        // properties
        let flag    = false;
        let result  = false;
        // create section element
        let section = document.createElement('section');
        section.setAttribute('class', '--case-study__grid--center');
        // check content and append - user persona
        if(this.data.persona.length > 0){
            // create user persona
            section.appendChild(this.createUserPersona());
            flag = true;
        }
        // check content and append - timeline
        if (this.data.timeline.length > 0){
            // create timeline
            section.appendChild(this.createTimeline());
            flag = true;
        }
        // check flag
        if(flag == true){result = section;}
        // append to container
        return result;
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
        return article;
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
        return article;
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
        return table;
    }
    /*------------------------------------------------------*/
    /**
     * @name createGridResearch
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createGridResearch(){
        // properties
        let flag    = false;
        let result  = false;
        // create section element
        let section = document.createElement('section');
        section.setAttribute('class', '--case-study__grid--center');
        // append articles - design inspiration
        if(this.data.design.length > 0){
            section.appendChild(this.createInspiration());
            flag = true;
        }
        // append articles - tech requirements
        if(this.data.tech.length > 0){
            section.appendChild(this.createTech());
            flag = true;
        }
        // check
        if(flag == true){
            result = section;
        }
        // append to container
        return result;
    }
    /*------------------------------------------------------*/
    /**
     * @name createInspiration
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createInspiration(){
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
        return article;
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
        let grid_dev    = document.createElement('div');
        let grid_sys    = document.createElement('div');

        let icon_sys    = document.createElement('i');
        // add class to elements
        article.setAttribute('class', '--case-study__tech');
        heading_dev.setAttribute('class', '__tech__heading');
        heading_sys.setAttribute('class', '__tech__heading');
        icon_main.setAttribute('class', '__tech__icon');
        grid_dev.setAttribute('class', '__tech__grid');
        grid_sys.setAttribute('class', '__tech__grid');
        // add content
        heading.innerHTML       = 'Technical Requirements';
        icon_main.innerHTML     = '<i class="fa-solid fa-computer"></i>';
        heading_dev.innerHTML   = '<h5>Device</h5>';
        heading_sys.innerHTML   = '<h5>System</h5>';
        // loop data
        this.data.tech.forEach(item => {
            // create icon
            let icon = document.createElement('i');
            let text = document.createElement('p');
            text.innerHTML = item.content;
            // select icon
            if(item.type == false){
                // set icon style
                icon.setAttribute('class', 'fa-solid fa-mobile');
                // append
                grid_dev.appendChild(icon);
                grid_dev.appendChild(text);
            } else if(item.type == true){
                // set icon style
                icon.setAttribute('class', 'fa-solid fa-gear');
                // append
                grid_sys.appendChild(icon);
                grid_sys.appendChild(text);
            }
        });
        // appand markup to article
        article.appendChild(heading);
        article.appendChild(icon_main);
        article.appendChild(heading_dev);
        article.appendChild(grid_dev);
        article.appendChild(heading_sys);
        article.appendChild(grid_sys);
        // append to container
        return article;
    }
    /*------------------------------------------------------*/
    /**
     * @name createDesigns
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createDesigns(){
        // property
        let result = false;
        // check
        let types_arr = ['user_flow', 'uml', 'lofi', 'hifi'];
        let flags_arr = [];
        types_arr.forEach(type => {
            // check if content exists
            let content = this.data[type].content;
            let img_src = this.data[type].img_src;
            if(content && img_src){flags_arr.push(type);}
        });
        // check if content appended
        if(flags_arr.length > 0){
            // define section element
            let section = document.createElement('section');
            section.setAttribute('class', '--case-study__grid--center');
            // loop design elements
            flags_arr.forEach(type => {
                // create article
                let article = this.createDesignItem(type);
                // append article
                section.appendChild(article);
            });
            // define result
            result = section;
        }
        // append to container
        return result;
    }
    /*------------------------------------------------------*/
    /**
     * @name createDesignItem
     * @type {Method}
     * @memberof
     * @description
     * @return article element
     */
    /*------------------------------------------------------*/
    createDesignItem(type){
        // elements
        let article = document.createElement('article');
        let heading = document.createElement('h3');
        let text    = document.createElement('p');
        let img     = document.createElement('img');
        // properties
        let article_cls = '--case-study__flow';
        let bkrnd_color = '';
        // content
        let content_heading = '';
        let content_text    = '';
        let content_img_src = '';
        let content_img_alt = '';
        // determine heading
        switch(type){
            case 'user_flow':
                content_heading = 'User Flow';
                bkrnd_color     = '--sky';
                break;
            case 'uml':
                content_heading = 'UML Diagraming';
                bkrnd_color     = '--grey';
                break;
            case 'lofi':
                content_heading = 'Low Fidelity Wireframing';
                bkrnd_color     = '--sky';
                break;
            case 'hifi':
                content_heading = 'High Fidelity Wireframing';
                bkrnd_color     = '--grey';
                break;
        }
        content_text    = this.data[type].content
        content_img_src = this.data[type].img_src;
        content_img_alt = this.data[type].img_alt;
        // apply content
        article.setAttribute('class', `${article_cls} ${bkrnd_color}`);
        heading.innerHTML   = content_heading;
        text.innerHTML      = content_text;
        img.setAttribute('src', content_img_src);
        img.setAttribute('alt', content_img_alt);
        // append elements
        article.appendChild(heading);
        article.appendChild(text);
        article.appendChild(img);
        // append to container
        return article;
    }
    /*------------------------------------------------------*/
    /**
     * @name createConclusion
     * @type {Method}
     * @memberof
     * @description
     */
    /*------------------------------------------------------*/
    createConclusion(){
        // elements
        let section         = document.createElement('section');
        let heading_device  = document.createElement('h3');
        let heading_list    = document.createElement('h3');
        let article_device  = document.createElement('article');
        let article_list    = document.createElement('article');
        let device          = document.createElement('div');
        let device_img      = document.createElement('img');
        // apply attributes
        section.setAttribute('class', '--case-study__conclusion');
        article_device.setAttribute('class', '__conclusion__phone');
        article_list.setAttribute('class', '__conclusion__list');
        device.setAttribute('class', 'phone');
        device_img.setAttribute('src', this.data.conclusion.img_src);
        device_img.setAttribute('alt', this.data.conclusion.img_alt);
        // add content
        heading_device.innerHTML = 'Final Product';
        heading_list.innerHTML  = 'Key Takeaways';
        // loop takeaways
        this.data.conclusion.takeaways.forEach(item => {
            // elements
            let icon = document.createElement('i');
            let text = document.createElement('p');
            // apply attributes and content
            icon.setAttribute('class', 'fa-solid fa-gear');
            text.innerHTML = item.content;
            // append elements
            article_list.appendChild(icon);
            article_list.appendChild(text);
        });
        // append elements - article phone
        device.appendChild(device_img);
        article_device.appendChild(device);
        // append elements - section
        section.appendChild(heading_device);
        section.appendChild(heading_list);
        section.appendChild(article_device);
        section.appendChild(article_list);
        // append to container
        return section;
    }
}

let test = new CaseStudy(json_case_study);
test.buildCaseStudy();