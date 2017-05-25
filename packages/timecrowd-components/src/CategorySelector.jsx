import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapCssClasses } from './utils'
import { ExpansionPanel, ExpansionPanelHeader, PanelBody, Avatar } from './index'

class CategorySelector extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      children,
      tag,
      teams,
      activeTeam,
      activeCategory,
      recentCategories,
      ...attributes,
    } = this.props

    const Tag = tag

    const classes = mapCssClasses(
      'category-selector',
      className,
    )

    return (
      <Tag {...attributes} className={classes}>
        <div className="list-group">
          {recentCategories.map((category) => {
            return (
              <div className="list-group-item list-group-item-action">
                <i className={['category-circle', 'category-' + category.color].join(' ')} />
                {category.title} - {category.team.name}
              </div>
            )
          })}
        </div>
        {teams.map((team) => {
          return (
            <ExpansionPanel isExpand={activeTeam === team.id}>
              <ExpansionPanelHeader>
                <div className="panel-label">
                  <Avatar image={team.avatar} size="sm" className="mr-1" />
                  {team.name}
                </div>
              </ExpansionPanelHeader>
              <div className="panel-content">
                <PanelBody>
                  <div className="list-group">
                    {team.categories.map((category) => {
                      return (
                        <div className="list-group-item list-group-item-action">
                          <i className={['category-circle', 'category-' + category.color].join(' ')} />
                          {category.title}
                        </div>
                      )
                    })}
                  </div>
                </PanelBody>
              </div>
            </ExpansionPanel>
          )
        })}
      </Tag>
    )
  }
}

CategorySelector.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  teams: PropTypes.array.isRequired,
  activeTeam: PropTypes.object,
  activeCategory: PropTypes.object,
  recentCategories: PropTypes.array,
}

CategorySelector.defaultProps = {
  tag: 'div',
  recentCategories: [],
}

export default CategorySelector
