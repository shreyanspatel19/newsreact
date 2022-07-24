import React, { Component } from 'react'
import Newss from './newss'
import PropTypes from 'prop-types'
import Spinner from './Spinner';

import InfiniteScroll from "react-infinite-scroll-component";
export class newscontet extends Component {
    articles=[
        
    {
        "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
        "author": "Brittany Carter",
        "title": "Shelley Nitschke keen to carry on Matthew Mott's legacy in new era for Australian women's cricket team",
        "description": "Shelley Nitschke is an Australian cricket legend on the field. Now she'll take on a new challenge as the interim head coach of the national team she used to represent.",
        "url": "http://www.abc.net.au/news/2022-05-20/shelley-nitschke-takes-over-australian-women-cricket-team/101084436",
        "urlToImage": "https://live-production.wcms.abc-cdn.net.au/7573bd983e15aff6be5873fe75360501?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=0&width=862&height=485",
        "publishedAt": "2022-05-20T02:30:57Z",
        "content": "It was announced this week that Matthew Mott would leave his long-standing role with the national women's side to take charge of England's men's white-ball prospects.\r\nThe news meant assistant Shelle… [+6035 chars]"
      },
      {
        "source": { "id": "bbc-sport", "name": "BBC Sport" },
        "author": "BBC Sport",
        "title": "Shane Warne memorial - watch & follow updates",
        "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
        "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
        "publishedAt": "2022-03-30T08:22:26.498888Z",
        "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
      },
      {
        "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
    ]
    static defaultProps={
      country : 'in',
      category: "general"
    }
    static PropsTypes = {
      country : PropTypes.string
    }
    constructor(){
        super();
        console.log("newscontet")
        this.state={
            articles:this.articles,
            loading: true,
            page:1,
            totalResults : this.articles.totalResults
        }
    }
    
    async componentDidMount(){
     
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=74b5fbc80bbf41a7b36f933b242d6b36&page=1&pageSize=8`
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles,
       totalResults: parsedData.totalResults,
        loading : false
      })
    }
    // handelprevious = async () =>{
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1895cfb3042e47a4a4a1d7d59d3258a1&page=${this.state.page - 1}&pageSize=5`
    //   this.setState({loading: true})
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page:this.state.page - 1,
    //     articles: parsedData.articles,
    //    loading : false
    //   })
    //   console.log("dekhat")
    // }

    // handelnext = async () => {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1895cfb3042e47a4a4a1d7d59d3258a1&page=${this.state.page + 1}&pageSize=5`
    //   this.setState({loading: true})
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log("k ny ")
     
    //   // fetchMoreData

    //   this.setState({
    //     page:this.state.page + 1,
    //     loading : false,
    //     articles: parsedData.articles
    //   })
    // }

    fetchMoreData = async () => {
      this.setState({page:this.state.page + 1,})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=74b5fbc80bbf41a7b36f933b242d6b36&page=${this.state.page + 1}&pageSize=5`
      // this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log("k ny ")
     
      // fetchMoreData

      this.setState({
        
        // loading : false,
        totalResults: parsedData.totalResults,
        articles: this.state.articles.concat(parsedData.articles) 
      })
    };
  render() {
    return (<>
      <div className='container'>
          <center><h3>shreyans samachar</h3></center>
          {this.state.loading &&  <Spinner/> }

          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4><Spinner/></h4>}
        >
          <div className="container">
          <div className="row ">
                  {!this.state.loading && this.state.articles.map((element)=>{
                    return  <div className="col-md-3"  key={element.url} >
                      <Newss title={element.title} description={element.description} newsurl={element.url} iurl={element.urlToImage}/>
                        </div>  
                    })}
              </div>
          </div>

          </InfiniteScroll>
      </div>
              {/* <div className=" d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelprevious}> &larr; Previous </button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/5)} type="button" className="btn btn-dark" onClick={this.handelnext}> Next  &rarr;</button>
      </div>   */}
        </>
    )
  }
}

export default newscontet