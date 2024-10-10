/*------------------------------------------------------------------------------*/
//  Case Study
/*------------------------------------------------------------------------------*/
/**
     * @name case_study
     * @type {Object}
     * @namespace case_study
     * @description 
     * @property {String} project_title
     * @property {String} problem
     * @property {Array} persona
     * @property {Array} timeline
     * @property {Object} table
 */
let json_case_study = {
    /**
     * @name project_title
     * @type {String}
     * @memberof case_study
     * @description
     */
    project_title: 'Project Title',
    /**
     * @name problem
     * @type {String}
     * @memberof case_study
     * @description
     */
    problem: 'Here is a problem statement',
    /**
     * @name persona
     * @type {Array} array of objects
     * @memberof case_study
     * @description
     * @property {Boolean}  type        @example true = demographic | false = behaviors
     * @property {String}   content     @example 'String description'
     */
    persona: [
        {type: true, content: 'or sit amet consectetur'},
        {type: false, content: 'or sit amet consectetur'},
        {type: false, content: 'or sit amet consectetur'},
        {type: true, content: 'or sit amet consectetur'}
    ],
    /**
     * @name timeline
     * @type {Array} array of objects
     * @memberof case_study
     * @description
     * @property {String} time      @example 'Week 1'
     * @property {String} content   @example 'String description of task'
     */
    timeline: [
        {time: 'Week 1', content: 'Lorem ipsum dolor sit amet'},
        {time: 'Week 2', content: 'Lorem ipsum dolor sit amet'},
        {time: 'Week 3', content: 'Lorem ipsum dolor sit amet'},
        {time: 'Week 4', content: 'Lorem ipsum dolor sit amet'},
        {time: 'Week 5', content: 'Lorem ipsum dolor sit amet'}
    ],
    /**
     * @name table
     * @type {Object}
     * @memberof case_study
     * @description
     * @property {Array}    ids     array of strings
     * @property {Array}    titles  array of strings
     * @property {Array}    values  array of strings
     */
    table: {
        headings: ['titleA', 'titleB', 'titleC'],
        rows: [
            {id: 'companyA', values: [true, true, false]},
            {id: 'companyB', values: [false, false, false]},
            {id: 'companyC', values: [false, true, false]},
            {id: 'companyD', values: [true, false, true]}
        ]
    },
    /**
     * @name design
     * @type {Array} limit of 2
     * @memberof case_study
     * @description
     * @property {String} img_src
     * @property {String} img_alt
     * 
     */
    design: [
        {img_src: 'assets/main/case_study/test_model_01.jpg', img_alt: 'SpitfireOne'},
        {img_src: 'assets/main/case_study/test_model_02.png', img_alt: 'SpitfireTwo'}
    ],
    /**
     * @name tech
     * @type {Array}
     * @memberof case_study
     * @description
     * @property {Boolean} type @example true = demographic | false = behaviors
     * @property {String} content @example 'String description'
     */
    tech: [
        {type: false, content: 'or sit amet consectetur'},
        {type: true, content: 'or sit amet consectetur'},
        {type: true, content: 'or sit amet consectetur'},
        {type: false, content: 'or sit amet consectetur'}
    ],
    /**
     * @name user_flow
     * @type {Object}
     * @memberof case_study
     * @description
     * @property {String} content
     * @property {String} img_src
     * @property {String} img_alt
     */
    user_flow: {
        content: '',
        img_src: 'assets/main/case_study/flow_art_museum_01.png',
        img_alt: ''
    },
    /**
     * @name uml
     * @type {Object}
     * @memberof case_study
     * @description
     * @property {String} content
     * @property {String} img_src
     * @property {String} img_alt
     */
    uml: {
        content: 'Here is some uml content',
        img_src: 'assets/main/case_study/UML_thermo_swimlane_diagram.png',
        img_alt: ''
    },
    /**
     * @name lofi
     * @type {Object}
     * @memberof case_study
     * @description
     * @property {String} content
     * @property {String} img_src
     * @property {String} img_alt
     */
    lofi: {
        content: 'Here is some Lofi Wireframe content',
        img_src: 'assets/main/case_study/lowfi_quiz.png',
        img_alt: ''
    },
    /**
     * @name hifi
     * @type {Object}
     * @memberof case_study
     * @description
     * @property {String} content
     * @property {String} img_src
     * @property {String} img_alt
     */
    hifi: {
        content: '',
        img_src: null,
        img_alt: ''
    },
    /**
     * @name conclusion
     * @type {Object}
     * @memberof case_study
     * @description
     * @property {String} img_src
     * @property {String} img_alt
     * @property {Array} takeaways
     */
    conclusion: {
        img_src: 'assets/main/case_study/quiz__carousel--question.png',
        img_alt: 'Alternate Title',
        /**
         * @name takeaways
         * @type {Array}
         * @property {String} icon 
         * @property {String} content 
         */
        takeaways: [
            {icon: null, content: 'Content information is right here'},
            {icon: null, content: 'One way i thought about this piece'},
            {icon: null, content: 'You guys know about dead interet theory?'}
        ]
    }
};