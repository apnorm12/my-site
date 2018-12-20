import React from 'react';

class CanvasProjects extends React.Component {

    render() {
        return (
            <div className="canvas">
                <h2 className="canvas-header">
                    Projects
                </h2>
                <table className="canvas-table-row">
                    <tr>
                        <td>
                            <a className="canvas-link" href="/projects/site">My Site</a>
                        </td>
                    </tr>
                </table>

                <p>
                    Stay tuned for more!
                </p>

            </div>


        );
    }
}

export default CanvasProjects;