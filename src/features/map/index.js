import React from 'react'
import { SPRITE_SIZE } from '../../config/constants'
import './styles.css'
import {connect} from 'react-redux'

function getTileSprite(type) {
    switch(type) {
        case 0:
            return 'grass'
        case 5:
            return 'rock'
        case 6: 
            return 'tree'
    }
} 

function MapTile(props) {
    return <div 
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
          height: SPRITE_SIZE,
          width: SPRITE_SIZE,  
        }}
    

    />
       
}

function MapRow(props) {
    return <div classNam="row">
        {
            props.tiles.map( tile => <MapTile tile={tile} />)
        }
    </div>
}
function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '800px',
                height: '400px',
                border: '4px solid white',
                //margin: '10px auto'
            }}
        >
            {
                props.tiles.map( row => <MapRow tiles ={row} /> )
            }
        </div>
        
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
    }
}

export default connect(mapStateToProps)(Map)