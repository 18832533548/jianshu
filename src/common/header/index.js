import React from 'react';
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group';
import { actionCreators } from './store'
import { 
    HeaderWrapper ,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper

} from './style';
// Header无状态组件性能比较好 
const Header =(props) =>{
    return(
    <HeaderWrapper>
    <Logo/>
    <Nav>
       <NavItem className="left active">首页</NavItem> 
       <NavItem className="left">下载APP</NavItem> 
       <NavItem className="right">登录</NavItem> 
       <NavItem className="right">
       <span className="icon iconfont">&#xe636;</span>
       </NavItem> 
       <SearchWrapper>
        <CSSTransition  
        in={props.focused}
        timeout={200}
        classNames="slide"
        >   
       <NavSearch 
       className={props.focused ? 'focused': ''}
       onFocus={props.handleInputFocus}
       onBlur={props.handleInputBlur}
       >
       </NavSearch>
       </CSSTransition>
       <span className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe60c;</span>
       </SearchWrapper>
    </Nav>
    <Addition>
      <Button className="writting">
      <span className="icon iconfont">&#xe615;</span>
          写文章</Button>
      <Button className="reg">注册</Button>
    </Addition>
     </HeaderWrapper>
    ); 
}
const mapStateToProps = (state) => {
    return {
     focused: state.header.get('focused')
    }
}
const mapDispathToProps =(dispath) =>{
    return {
        handleInputFocus(){
          dispath(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispath(actionCreators.searchBlur());
          }

    }
}
export default connect(mapStateToProps,mapDispathToProps) (Header);
