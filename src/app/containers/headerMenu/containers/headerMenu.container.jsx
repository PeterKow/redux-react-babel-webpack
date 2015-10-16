import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchLocation from '../../searchArticles/components/searchLocation.js'
import SearchKeyWords from '../../searchArticles/components/searchKeywords.js'
import SelectLanguage from '../../searchArticles/components/selectLanguage.js'
import DropDown from '../../utils/dropdown/dropdown.js'


class HeaderMenu extends Component {

  manageDropDown() {

    if(this.state.dropDownOpen === 'open'){
      this.setState({dropDownOpen: 'close'})
    } else {
      this.setState({dropDownOpen: 'open'})
    }

  }

  constructor(props, context){
    super(props)
    this.state = { dropDownOpen : 'close' }
  }

  render() {
    const { searchArticles } = this.props

    return  (
      <div style={articlesContainerStyle}>
        <div style={{marginTop: 5}}>
          <div className="row">
            <div className="col-md-2">
              <a href="/search"><img src="/images/aurity_logo_v32_small.png" style={logoTopStyle}/></a>
            </div>
            <form>
              <div className="col-md-3">
                <div style={centerInputs}>
                  <SelectLanguage ref='language' defaultLanguage={searchArticles.get('language')} />
                </div>
              </div>
              <div className="col-md-3">
                <div style={centerInputs}>
                  <SearchLocation  ref='location' location={searchArticles.get('location')} />
                </div>
              </div>
              <div className="col-md-3">
                <div style={centerInputs}>
                  <SearchKeyWords ref='keywords' keywords={searchArticles.get('keywords')} />
                </div>
              </div>
            </form>
            <div className="col-md-1">
              <img style={{height: 40, borderRadius: 10}} src="/images/me.png" onClick={::this.manageDropDown}/>
              <DropDown state={this.state.dropDownOpen}/>
            </div>
          </div>
        </div>
        <GoldLine/>
      </div>
    );
  }
}


function select(state){
  return {
    searchArticles: state.searchArticles
  }
}

export default connect(select)(HeaderMenu);

class GoldLine extends Component {
  render () {
    return <div style={{ background: '#DAA520', height: 3}} />
  }
}

var articlesContainerStyle = {
  font: '14px "Helvetica Neue", Helvetica, Arial, sans-serif',
  lineHeight: 1.4,
  background: '#ffffff',
  //background: '#f5f5f5',
  color: '#4d4d4d',
  minWidth: 230,
  maxWidth: 850,
  margin: '0 auto',
  marginBottom: 10,
  WebkitFontSmoothing: 'antialiased',
  MozFontSmoothing: 'antialiased',
  fontSmoothing: 'antialiased',
  fontWeight: 300,
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px, rgba(0, 0, 0, 0.0980392) 0px 25px 50px 0px'
};

const centerInputs = {
  padding: '5px 0 5px'
}

const logoTopStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: 44
}

//<h2 style={{textAlign: 'center'}}>TwitterSearch</h2>
//<a href="/auth/twitter" className="tweetbutton" title="Sign in">Sign in</a>