import React,{Component} from 'react'
import './header.css'
import { Link} from 'react-router-dom';

class Header extends Component {

    state = {
        links:[
            {
                name:'ABOUT',
                linkTo:'/about',
                public: true
            },
            {
                name:'BLOG',
                linkTo:'/blog',
                public: true
            },
            {
                name:'SERVICES',
                linkTo:'/blog',
                public: true
            },
            {
                name:'SUPPORT',
                linkTo:'/support',
                public: true
            },
            {
                name:'CONTACT',
                linkTo:'/contact',
                public: true
            },
           
            
        ],
        pages: [
            {
                name:'Register',
                linkTo:'/register',
                public: true
            },
            {
                name:'Login',
                linkTo:'/login',
                public: true
            }
        ]
    }

    showLink(links) {
        let list = []
        //will do a check if the user is authenticated or not to display private routes
        //will implement if login api's are available
        links.forEach((item) => {
            if(item.public){
                list.push(item)
            }else{
                //
            }

            
        })

        return list.map((item,i)=> {
            

            if(item.name === "Register" || item.name === "Login"){
                return <div className='reg_reg_btn'>{item.name}</div>
            }else{
                return <Link className='links' to={item.linkTo} key={i}>
                {item.name}
              </Link> 
            }
            
    })
    }


    render(){
        return (
            <header>
                <div className='container'>
                    <div>
                        <div className='logo'>
                            Abutto
                        </div>
                    </div>
                    <div style={{width: '50%'}}>
                        <div className='link-wrapper'>
                            {this.showLink(this.state.links)}
                        </div>
                    </div>
                    <div>
                        <div className='log_reg_btn_wrap'>
                           {this.showLink(this.state.pages)}
                        </div>
                    </div>
               </div>
            </header>
        )
    }
   
}

export default Header
