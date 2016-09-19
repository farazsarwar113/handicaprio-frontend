'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DaterangepickerCtrl
 * @description
 * # DaterangepickerCtrl
 * Controller of the minovateApp
 */
app
  .controller('DaterangepickerCtrl', function ($scope, $moment) {
    $scope.startDate = $moment().subtract(1, 'days').format('MMMM D, YYYY');
    $scope.endDate = $moment().add(31, 'days').format('MMMM D, YYYY');
    $scope.rangeOptions = {
      ranges: {
        Today: [$moment(), $moment()],
        Yesterday: [$moment().subtract(1, 'days'), $moment().subtract(1, 'days')],
        'Last 7 Days': [$moment().subtract(6, 'days'), $moment()],
        'Last 30 Days': [$moment().subtract(29, 'days'), $moment()],
        'This Month': [$moment().startOf('month'), $moment().endOf('month')],
        'Last Month': [$moment().subtract(1, 'month').startOf('month'), $moment().subtract(1, 'month').endOf('month')]
      },
      opens: 'left',
      startDate: $moment().subtract(29, 'days'),
      endDate: $moment(),
      parentEl: '#content'
    };

  })
.filter('daterange', function ()
{
  return function(conversations, start_date, end_date)
  {
    var result = [];

    // date filters
    var start_date = (start_date && !isNaN(Date.parse(start_date))) ? Date.parse(start_date) : 0;
    var end_date = (end_date && !isNaN(Date.parse(end_date))) ? Date.parse(end_date) : new Date().getTime();

    // if the conversations are loaded
    if (conversations && conversations.length > 0)
    {
      $.each(conversations, function (index, conversation)
      {
        var conversationDate = new Date(conversation.date_posted);

        if (conversationDate >= start_date && conversationDate <= end_date)
        {
          result.push(conversation);
        }
      });

      return result;
    }
  };
});
