import React, {useState} from 'react';
import './App.css';

const withArticleAndVideo = (elem) => {
    const Component = () => (elem.type === 'video') ? <Video {...elem} /> : <Article {...elem}/>
    if (elem.views >= 1000) {
        return class extends React.Component {
            render() {
                return <Popular>{<Component/>}</Popular>
            }
        }
    }
    if (elem.views < 100) {
        return class extends React.Component {
            render() {
                return <New>{<Component/>}</New>
            }
        }
    }
    return class extends React.Component {
        render() {
            return <Component/>
        }
    }
}

function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

function Popular(props) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};

function Article(props) {
    return (
        <div className="item item-article">
            <h3>
                <a href={'#'}>{props.title}</a>
            </h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} title={'video'}/>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

function List(props) {
    return props.list.map((item, index) => {
        const ListItem = withArticleAndVideo(item);
        return <ListItem key={index}/>;
    });
};

export default function App() {
    const [list] = useState([
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    return (
        <List list={list}/>
    );
}
