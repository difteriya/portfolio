/**!
 * MixItUp loadmore v0.0.1
 *
 * @author    Wayne Durack.
 * @link      https://github.com/trolleymusic/mixitup-loadmore
 */ 

(function ($, undf) {
  $.extend(true, $.MixItUp.prototype, {

    // Mixitup hooks
    
    _actions: {
      _constructor: {
        post: {
          loadmore: function () {
            this.loadmore = {
              buttonClass: 'load-more-btn',
              buttonLabel: 'Load more',
              buttonWrapper: '.loadmore',
              initial: 12,
              lessClass: 'loadmore-less',
              lessLabel: 'less',
              loadMore: 12
            }

            $.extend(this.selectors, {
              button: '.' + this.loadmore.buttonClass,
              buttonWrapper: this.loadmore.buttonWrapper,
              less: '.' + this.loadmore.lessClass
            })

            this._currentCount = null
            this._$button = $()
          }
        }
      },
      
      _init: {
        post: {
          loadmore: function () {
            this._currentCount = this.loadmore.initial
          }
        }
      },
      
      _bindHandlers: {
        post: {
          loadmore: function () {
            // Find the button
            this._$button = $(this.selectors.buttonWrapper)
            // Bind the buttons
            // More
            this._$button.on('click.mixItUp.' + this._id, this.selectors.button, function () {
              this.multiMix({ loadmore: "more" })
            }.bind(this))
            // Less
            this._$button.on('click.mixItUp.' + this._id, this.selectors.less, function () {
              this.multiMix({ loadmore: "less" })
            }.bind(this))
          }
        }
      },
      
      _buildState: {
        post: {
          loadmore: function () {
            $.extend(this._state, {
              _currentCount: this._currentCount
            })
          }
        }
      },
      
      _sort: {
        post: {
          loadmore: function () {
            this._printSort()
          }
        }
      },
      
      _filter: {
        post: {
          loadmore: function () {
            
            var current = this._currentCount || this.loadmore.initial,
                total = this._$targets.length,
                show,
                hide;
            
            // Can't go over the total
            if (current > total) {
              current = total
            }
            
            if (this.loadmore.loadMore > 0) {
              
              show = this._$show.filter(function (i) {
                return i <= current - 1
              })
              
              hide = this._$show.filter(function (i) {
                return i > current - 1
              })
              
              this._$show = show
              this._$hide = this._$hide.add(hide)

              if (this._sorting) {
                this._printSort(true)
              }
              
              // Make the button
              if (this._$button.length) {
                this.generateButtons()
              }
              
            }
          }
        }
      },
      
      multiMix: {
        pre: {
          loadmore: function (args) {
            var args = this._parseMultiMixArgs(args)
            
            // Reset
            if (this._currentCount > this._$targets.length) {
              this._currentCount = this._$targets.length
            }
            
            if (args.command.loadmore && args.command.loadmore === "more") {
              // Load more
              this._currentCount = this._currentCount + this.loadmore.loadMore
            } else if (args.command.loadmore && args.command.loadmore === "less") {
              // Load less
              this._currentCount = this.loadmore.initial
            } else if (args.command.filter && args.command.filter === "all") {
              // Filter has been turned off
              this._currentCount = this.loadmore.initial
            } else if (args.command.filter || args.command.sort) {
              // Make currentCount more than the targets so that
              //  the buttons will disappear
              this._currentCount = this._$targets.length + 1
            }
          }  
        }
      },
      
      destroy: {
        post: {
          loadmore: function () {
            this._$button.off('.mixItUp').html('')
          }
        }
      }
    },

    // Generate Load more and Less buttons
    generateButtons: function () {
      var buttonClass = this.loadmore.buttonClass || '',
          buttonLabel = this.loadmore.buttonLabel || 'Load more',
          buttonDisabled,
          disabled = ' hidden',
          buttons
      
      if (this._currentCount > this._$targets.length) {
        buttonDisabled = disabled
      } else {
        buttonDisabled = this._currentCount == this._$targets.length ? disabled : ''
      }
      
      buttons = [
            '<button class="', buttonClass, '"', buttonDisabled, '>', buttonLabel, '</button>',
            ].join('')
      
      this._$button.html(buttons)
    }
    
  })

})(jQuery);