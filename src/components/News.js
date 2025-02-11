import React, { Component } from 'react'
import NewsItem from    './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
  }
 capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



  articles= [
    {
      "source": {
      "id": null,
      "name": "Minneapolis Star Tribune"
      },
      "author": "Chris Hine, Star Tribune",
      "title": "Live from Game 3: Timberwolves, Nuggets meet at Target Center - Star Tribune",
      "description": "The Wolves won the first two games in Denver, and were looking to put the Nuggets in a deep hole. The defending champions made sure that didn't happen.",
      "url": "https://www.startribune.com/timberwolves-nuggets-live-report-game3-target-center-anthony-edwards-nikola-jokic/600365158/",
      "urlToImage": "https://arc.stimg.co/startribunemedia/DYUOU4CED5DPZBVJEK4O3NDAE4.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
      "publishedAt": "2024-05-11T04:18:45Z",
      "content": "The Timberwolves and Nuggets played the third game of their NBA Western Conference semifinal series tonight at Target Center. Staff writer Chris Hine filed updates from the game.\r\nLive play-by-play\r\n… [+7756 chars]"
      },
    {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": null,
      "title": "U.S. weapons may have been used in ways \"inconsistent\" with international law in Gaza, U.S. assessment says - CBS News",
      "description": null,
      "url": "https://www.cbsnews.com/news/israeli-forces-in-gaza-u-s-assessment-says/",
      "urlToImage": null,
      "publishedAt": "2024-05-11T03:00:20Z",
      "content": null
      },
    {
      "source": {
      "id": null,
      "name": "KTLA Los Angeles"
      },
      "author": "Travis Schlepp",
      "title": "Santa Monica Ferris wheel honors KTLA’s Sam Rubin - KTLA Los Angeles",
      "description": "One of the most endearing symbols of Los Angeles will be lit up Friday in honor of another L.A. icon. The Ferris wheel at Pacific Park in Santa Monica will air a special message for KTLA’s Sam Rubin, who died unexpectedly Friday at the age of 64. The local la…",
      "url": "https://ktla.com/news/california/santa-monica-ferris-wheel-honors-ktlas-sam-rubin/",
      "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2024/05/Screenshot-2024-05-10-at-7.43.29 PM.png?w=1280",
      "publishedAt": "2024-05-11T02:45:02Z",
      "content": "One of the most endearing symbols of Los Angeles will be lit up Friday in honor of another L.A. icon.\r\nThe Ferris wheel at Pacific Park in Santa Monica will air a special message for KTLA’s Sam Rubin… [+653 chars]"
      },
    {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": "Elise Preston",
      "title": "Sacramento State's unique approach helps bring peaceful end to campus protest - CBS News",
      "description": "\"We're not investing in students' future by engaging in relationships with companies that profit from war,\" Sacramento State University President Luke Wood told CBS News.",
      "url": "https://www.cbsnews.com/news/sacramento-state-unique-approach-peaceful-end-campus-protest-luke-wood/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/05/11/a8d9f866-5af7-4a5c-99aa-4d6b792e42e6/thumbnail/1200x630/5b75a5217173431ffd20bbe9ccc34770/luke-wood.jpg?v=218688c1357f974b9630d4fa8914721c",
      "publishedAt": "2024-05-11T02:37:54Z",
      "content": "Sacramento, California — Earlier this week, Sacramento State University President Luke Wood oversaw a peaceful end to a campus protest over the Israel-Hamas war, one of the many that have taken place… [+2805 chars]"
      },
    {
      "source": {
      "id": null,
      "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "iOS 18: Apple finalizing deal to bring ChatGPT to iPhone - 9to5Mac",
      "description": "Apple is finalizing an agreement with OpenAI to bring some of its technology to the iPhone this year, according to...",
      "url": "https://9to5mac.com/2024/05/10/ios-18-chatgpt-features-apple-openai/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/05/chatgpt-ios-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2024-05-11T01:33:00Z",
      "content": "Apple is finalizing an agreement with OpenAI to bring some of its technology to the iPhone this year, according to a new report from Bloomberg. With this deal, the report explains that Apple will be … [+1760 chars]"
      },
    {
      "source": {
      "id": "associated-press",
      "name": "Associated Press"
      },
      "author": "MARCIA DUNN",
      "title": "Strong solar storm hits Earth, could disrupt communications and produce northern lights in US - The Associated Press",
      "description": "An unusually strong solar storm hitting Earth could produce northern lights in the U.S. and potentially disrupt power and communications this weekend. The National Oceanic and Atmospheric Administration issued a rare severe geomagnetic storm warning Friday. T…",
      "url": "https://apnews.com/article/solar-storm-flares-eruption-sun-fc23251025efc2d20dc128dc0b6a7c68",
      "urlToImage": "https://dims.apnews.com/dims4/default/7255f02/2147483647/strip/true/crop/5472x3078+0+285/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc8%2F85%2Fd2ff51006cfc0f270708baef9b2a%2F9226aaad9f9a432bb037dad935cda5f6",
      "publishedAt": "2024-05-11T01:30:00Z",
      "content": "CAPE CANAVERAL, Fla. (AP) An unusually strong solar storm hitting Earth could produce northern lights in the U.S. this weekend and potentially disrupt power and communications.\r\nThe National Oceanic … [+4008 chars]"
      },
    {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "Arvind Kejriwal Leaves Jail After 50 Days, Says \"Need To Fight Dictatorship\" - NDTV",
      "description": "Arvind Kejriwal was released from Delhi's Tihar Jail Friday evening, hours after the Supreme Court granted him bail till June 1 so the Chief Minister - arrested in March in the alleged liquor policy scam - can campaign for the AAP in the election.",
      "url": "https://www.ndtv.com/india-news/arvind-kejiwal-leaves-jail-after-50-days-election-gamechanger-says-aap-5633876",
      "urlToImage": "https://c.ndtvimg.com/2024-05/2n6dngeo_arvind-kejriwal-outside-tihar-1200_625x300_10_May_24.jpeg",
      "publishedAt": "2024-05-11T00:46:00Z",
      "content": "Delhi Chief Minister Arvind Kejriwal was released from jail Friday evening (File).\r\nNew Delhi: Arvind Kejriwal was released from Delhi's Tihar Jail Friday evening - 50 days after he was jailed on cor… [+4878 chars]"
      },
    {
      "source": {
      "id": "politico",
      "name": "Politico"
      },
      "author": "POLITICO",
      "title": "Inside the unusually aggressive Arizona grand jury that indicted Trump's allies - POLITICO",
      "description": null,
      "url": "https://www.politico.com/news/2024/05/10/inside-arizona-grand-jury-trump-indictment-00157447",
      "urlToImage": null,
      "publishedAt": "2024-05-10T23:50:09Z",
      "content": null
      },
    {
      "source": {
      "id": "associated-press",
      "name": "Associated Press"
      },
      "author": "WYATTE GRANTHAM-PHILIPS",
      "title": "Technology crushing human creativity? Apple's new iPad ad has struck a nerve online - The Associated Press",
      "description": "A newly released ad promoting Apple’s new iPad Pro has struck quite a nerve online. The ad shows a hydraulic press crushing just about every creative instrument artists and consumers have used over the years — from a piano and record player, to piles of paint…",
      "url": "https://apnews.com/article/apple-ipad-ad-social-media-reaction-12e7fbd335feb4875d94c31b87379359",
      "urlToImage": "https://dims.apnews.com/dims4/default/af4eaba/2147483647/strip/true/crop/2432x1368+0+127/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fee%2F0a%2F44472bffc3727543a73b5ba1e0f4%2F3dae61a77ffa42eabb36b850341d7bff",
      "publishedAt": "2024-05-10T23:36:00Z",
      "content": "NEW YORK (AP) A newly released ad promoting Apples new iPad Pro has struck quite a nerve online.\r\nThe ad, which was released by the tech giant Tuesday, shows a hydraulic press crushing just about eve… [+3589 chars]"
      },
    {
      "source": {
      "id": "fox-news",
      "name": "Fox News"
      },
      "author": "Gabriel Hays",
      "title": "Biden donors rage over his pledge to pause weapon shipments to Israel: 'Bad, bad, bad decision' - Fox News",
      "description": "Major Biden donors are blasting President Biden for moving to pause weapons shipments to Israel over the country's plans to invade Rafah in southern Gaza.",
      "url": "https://www.foxnews.com/media/biden-donors-rage-pledge-pause-weapon-shipments-israel-bad-bad-bad-decision",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/05/Saban-Biden.png",
      "publishedAt": "2024-05-10T23:25:00Z",
      "content": "Multiple prominent pro-Israel Biden donors are slamming the president for threatening to pause weapon shipments to Israel if the country invades Rafah, Hamas stronghold in southern Gaza.\r\nNews outlet… [+3260 chars]"
      },
    {
      "source": {
      "id": null,
      "name": "Vox"
      },
      "author": "Li Zhou",
      "title": "What we know about the police killing of Black Air Force member Roger Fortson - Vox.com",
      "description": "Fortson’s shooting deepens longstanding scrutiny of police violence.",
      "url": "https://www.vox.com/24153974/roger-fortson-police-killing",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/5cug8VQDDuhVEQlZe4rsjGxPYxA=/0x286:3936x2347/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25442627/AP24130625977762.jpg",
      "publishedAt": "2024-05-10T22:35:00Z",
      "content": "The police killing of a Black Air Force service member in his own home is drawing renewed scrutiny to the deadly violence that US law enforcement routinely and disproportionately uses against Black A… [+7503 chars]"
      },
    {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Russian forces attack Ukraine's Kharkiv region, striking on new front - Reuters",
      "description": null,
      "url": "https://www.reuters.com/world/europe/ukraine-sends-reinforcements-after-russian-forces-attack-kharkiv-region-2024-05-10/",
      "urlToImage": null,
      "publishedAt": "2024-05-10T22:33:53Z",
      "content": null
      },
    {
      "source": {
      "id": null,
      "name": "Rolling Stone"
      },
      "author": "Larisha Paul",
      "title": "Taylor Swift Debuts 'My Boy Only Breaks His Favorite Toys' Live at Paris Eras Tour - Rolling Stone",
      "description": "Taylor Swift sang 'My Boy Only Breaks His Favorite Toys' live for the first time on the Eras tour, combining 'Is It Over Now' with 'Out of the Woods.'",
      "url": "http://www.rollingstone.com/music/music-news/taylor-swift-my-boy-only-breaks-his-favorite-toys-eras-tour-1235018927/",
      "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/05/taylor-swift-boy-only-breaks-favorite-toys.jpg?w=1600&h=900&crop=1",
      "publishedAt": "2024-05-10T22:05:51Z",
      "content": "The Eras tour setlist is still evolving as Taylor Swift returns to the stage for the European leg of her discography-spanning tour. The run picked up last night with an opening show in France, which … [+1503 chars]"
      },
    {
      "source": {
      "id": null,
      "name": "Deadline"
      },
      "author": "Anthony D'Alessandro",
      "title": "‘Kingdom Of The Planet Of The Apes’ Orbits $52M-$55M Opening – Friday PM Box Office Update - Deadline",
      "description": "'Kingdom of the Planet of the Apes' is off to a good start with Wednesday and Thursday previews amounting to $6M+. Pic will open to $52M-$55M.",
      "url": "http://deadline.com/2024/05/box-office-kingdom-of-the-planet-of-the-apes-1235911118/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2024/05/MCDKIOF_WD005.jpg?w=1024",
      "publishedAt": "2024-05-10T21:51:00Z",
      "content": "FRIDAY AFTERNOON: Knock on wood, but this summer release looks to be meeting its tracking projections. Wes Ball’s Kingdom of the Planet of the Apesfrom 20th Century Studios, the first Apes release un… [+3433 chars]"
      },
    {
      "source": {
      "id": null,
      "name": "CALmatters"
      },
      "author": "Alexei Koseff",
      "title": "California budget deficit: Newsom proposes spending cuts - CalMatters",
      "description": "Gov. Newsom proposes a mix of spending cuts, program delays and using reserves to close the California budget deficit.",
      "url": "https://calmatters.org/politics/2024/05/california-budget-deficit-newsom-may-proposal/",
      "urlToImage": "https://calmatters.org/wp-content/uploads/2024/05/051024_Newsom-Budget_FG_CM_09.jpg",
      "publishedAt": "2024-05-10T21:45:00Z",
      "content": "Faced with ongoing weaknesses in state finances, Gov. Gavin Newsom put forward a revised budget plan today that he said aims to stabilize California in the longer term by addressing a sizable deficit… [+7985 chars]"
      },
    {
      "source": {
      "id": "espn",
      "name": "ESPN"
      },
      "author": "Adrian Wojnarowski",
      "title": "Sources -- Mike Budenholzer agrees to 5-year deal to coach Suns - ESPN",
      "description": "Mike Budenholzer has agreed on a five-year contract to become the next coach of the Phoenix Suns, sources told ESPN's Adrian Wojnarowski on Friday.",
      "url": "https://www.espn.com/nba/story/_/id/40121404/sources-agreement-budenholzer-suns-expected-soon",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0516%2Fr371570_1296x729_16%2D9.jpg",
      "publishedAt": "2024-05-10T21:40:00Z",
      "content": "Mike Budenholzer has agreed on a five-year contract to become the next coach of the Phoenix Suns, sources told ESPN's Adrian Wojnarowski on Friday.\r\nA formal announcement will be made Saturday, sourc… [+1741 chars]"
      },
    {
      "source": {
      "id": null,
      "name": "The Athletic"
      },
      "author": "Jon Greenberg",
      "title": "Greenberg: Caleb Williams looks very real in Chicago Bears' colors at first blush - The Athletic",
      "description": "Friday’s rookie minicamp practice gave us our first opportunity to see Williams in uniform (orange aura and all). He looked comfortable.",
      "url": "https://theathletic.com/5485293/2024/05/10/chicago-bears-caleb-williams-rookie-minicamp/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/05/10172108/GettyImages-2152370128-scaled.jpg",
      "publishedAt": "2024-05-10T21:31:44Z",
      "content": "LAKE FOREST, Ill. It was an NFL Network reporter and not a new-age podcaster who asked the question, and that just shows how Caleb Williams is changing the way we think about Chicago Bears quarterbac… [+5568 chars]"
      },
    {
      "source": {
      "id": null,
      "name": "BBC News"
      },
      "author": null,
      "title": "Grünheide: Tesla factory protesters clash with police in Germany - BBC.com",
      "description": "Protesters opposed to the expansion of the site have clashed with police.",
      "url": "https://www.bbc.com/news/articles/cv2j0v237vko",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/275c/live/bf18cd90-0ee8-11ef-bee9-6125e244a4cd.png",
      "publishedAt": "2024-05-10T21:10:48Z",
      "content": null
      },
    {
      "source": {
      "id": null,
      "name": "BBC News"
      },
      "author": null,
      "title": "Seven dead in St Petersburg bus crash, officials say - BBC.com",
      "description": "The accident took place on the Potseluev Bridge in the historic centre.",
      "url": "https://www.bbc.com/news/articles/cw594p1l39no",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4b40/live/4f8647a0-0ee3-11ef-afb0-c7213411e7ad.jpg",
      "publishedAt": "2024-05-10T21:09:45Z",
      "content": null
      },
    {
      "source": {
      "id": "business-insider",
      "name": "Business Insider"
      },
      "author": "Ana Altchek",
      "title": "Sam Altman Teases OpenAI Demo Monday That 'Feels Like Magic' - Business Insider",
      "description": "Spoiler alert: the next OpenAI updates aren't GPT-5 or a search engine, according to Sam Altman.",
      "url": "https://www.businessinsider.com/openai-gpt-4-update-monday-feels-like-magic-sam-altman-2024-5",
      "urlToImage": "https://i.insider.com/663e759db4abc992e8c87169?width=1200&format=jpeg",
      "publishedAt": "2024-05-10T20:49:00Z",
      "content": "OpenAI is announcing new updates to ChatGPT and GPT-4 and according to Sam Altman, they feel \"like magic.\"\r\nThe OpenAI CEO posted on X, formerly Twitter, on Friday to tease about the \"new stuff\" bein… [+1411 chars]"
      }
      ]
  
    constructor(props){
      super(props);
      this.state={
        articles:this.articles,
        loading:false,
        page:1
      }
      document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
    }

    async componentDidMount(){
    
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=584c18f4f3294820bb37a95f88399103&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})

      const data = await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData)
      this.setState({articles: parsedData.articles,
                    totalResults : parsedData.totalResults,
                    loading: false
                  })
    }

   handlePreviousClick =   async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=584c18f4f3294820bb37a95f88399103&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})

    const data = await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData)
      this.setState({
        page : this.state.page -1,
        articles: parsedData.articles,
        loading:false

      })


    }

   handleNextClick = async()=>{
    if (this.state.page +1 > Math.ceil((this.state.totalResults/this.props.pageSize))){}
    else {
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=584c18f4f3294820bb37a95f88399103&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        const data = await fetch(url);
        let parsedData= await data.json();
       
          this.setState({
            page : this.state.page +1,
            articles: parsedData.articles,
            loading:false
      })
    }
    }

  render() {
    return (

      <>
      <div className='container my-3'>
       
        <h2 className='text-center font-italic' style={{margin:'35px 0px'}}>News Monkey-Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
        {!this.state.loading && this.state.articles.map((element)=>{
        return <div className="col-md-4"  key={element.url}>
        <NewsItem title={element.title?element.title.slice(0,45):''} description= {element.description?element.description.slice(0,88):''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
        </div>
        })}
        
        </div>

        <div className="container d-flex justify-content-between my-3">
        <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" class="btn btn-primary"  >{this.state.page+'/'+Math.ceil((this.state.totalResults/this.props.pageSize))}</button>
        <button type="button" disabled={this.state.page +1 > Math.ceil((this.state.totalResults/this.props.pageSize))} class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
      
      </>
    )
  }
}

export default News
