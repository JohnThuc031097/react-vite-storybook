
export default function Navbar() {
    return (
        <div className="Navbar"
            style={{
                width: 800, height: 52,
                // position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}>

            <div className="Shadow"
                style={{
                    width: 800, height: 62,
                    opacity: 0.8,
                    display: 'flex',
                    flexDirection: 'row',
                    background: 'white', boxShadow: '0px 2px 6px #435971',
                    borderRadius: 8
                }} >
                <div className="Search"
                    style={{
                        width: '70%', height: 38,
                        justifyContent: 'left',
                        alignItems: 'center',
                        gap: 10
                    }}>
                    <img className="CombinedShape" style={{ width: 17.72, height: 17.72 }} src="https://via.placeholder.com/18x18" />
                    <div className="SearchCtrl" style={{ color: '#A1ACB8', fontSize: 15, fontFamily: 'Public Sans', fontWeight: '400', lineHeight: 23, wordWrap: 'break-word' }}>Search (Ctrl+/)</div>
                </div>
                <div className="RightAction"
                    style={{
                        width: '30%', height: 38,
                        justifyContent: 'right',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 8,
                        marginRight: 8,
                        marginTop: 8,
                    }}>
                    <img className="Shape" style={{ width: 18, height: 18 }} src="https://via.placeholder.com/18x18" />
                    <img className="Shape" style={{ width: 17.71, height: 17.72 }} src="https://via.placeholder.com/18x18" />
                    <img className="Lr" style={{ width: 24, height: 24, left: 0, top: 7, position: 'absolute' }} src="https://via.placeholder.com/24x24" />
                    <div className="Notification" style={{ width: 27, height: 28, position: 'relative' }}>
                        <img className="IconColor" style={{ width: 27, height: 28 }} src="https://img.icons8.com/?size=50&id=11642&format=png" />
                        <div className="Oval" style={{
                            width: 18, height: 18,
                            background: '#FF3E1D',
                            borderRadius: 9999,
                            position: 'absolute',
                            left: 13, top: 0,
                        }}>
                            <div style={{
                                textAlign: 'center',
                                color: 'white', fontSize: 13, fontFamily: 'Public Sans', fontWeight: '500', textTransform: 'uppercase', wordWrap: 'break-word'
                            }}>4</div>
                        </div>
                    </div>
                    <div className="Status" style={{ width: 38, height: 38 }}>
                        <div className="Shadow"
                            style={{
                                width: 38, height: 38,
                                borderRadius: 197.50,
                                position: 'relative'
                            }} >
                            <img className="BackgroundColor"
                                style={{
                                    width: 38, height: 38,
                                    borderRadius: 197.50
                                }} src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/pingus-icon-icon.png" />
                            <div className="Online" style={{ width: 11, height: 11, left: 27, top: 27, position: 'absolute' }}>
                                <div className="Dot" style={{ width: 11, height: 11, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 7 }} />
                                <div className="Dot" style={{ width: 7.86, height: 7.86, left: 1.57, top: 1.57, position: 'absolute', background: '#71DD37', borderRadius: 5 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}