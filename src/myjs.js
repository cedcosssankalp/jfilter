// brandsArr=[]
let mydata = JSON.parse(products)

// function to display things
function display (items) {
  $('#idtbody tr').hide()
  console.log('i am in display fuinctuions')
  if (items.length > 0) {
    items.forEach(e => {
      console.log(e.id)
      $('#head').show()
      $('#' + e.id).show()
    })
  } else {
    $('#head').show()
    console.log('Nothing to display')
  }
  // if(items.id==)
  // $('#' + items[0].id).show()
}
$(document).ready(function () {
  //   Adding Brand  DropDown Button
  $(
    '#cedcoss'
  ).append(`<select name="brandDropdown" id="brandDropdown" class="dropbtn">
   <option value="all" selected>All</option></select>`)
  //  Adding OS Drop Down Menu
  $(
    '#cedcoss'
  ).append(`<select name="OsDropdown" id="osDropdown" class="dropbtn">
   <option value="all" selected>All</option></select>`)
  //  Adding Search button
  $('#cedcoss').append(
    `<input type="text" id="searchInput" placeholder="Search......">`
  )
  // Adding data to table
  $('#cedcoss').append(`<table id="idtable">
  <tbody id="idtbody">
  <tr id="head">
    <th>Id</th>
    <th>Name</th>
    <th>Brand</th>
    <th>OS</th>
  </tr>
  </tbody></table>`)

  // console.log(typeof mydata)
  mydata.forEach(element => {
    // Adding data to Table
    $('#idtbody').append(
      `<tr id="${element.id}"><td>${element.id}</td><td>${element.name}</td><td>${element.brand}</td><td>${element.os}</td></tr>`
    )
    // Adding Brand drop down Menu
    $('#brandDropdown').append(
      `<option value="${element.brand}" >${element.brand}</option>`
    )
    // Adding Os Drop Down Menu
    $('#osDropdown').append(
      `<option value="${element.os}" >${element.os}</option>`
    )
  })
})

$(document).on('change', '#brandDropdown,#osDropdown', function () {
  finalArr = []

  brand = $('#brandDropdown').val()
  os = $('#osDropdown').val()
  console.log(brand, os)

  // When both aree not all
  if (brand !== 'all' && os !== 'all') {
    console.log('both are not all')
    mydata.forEach(e => {
      if (e.brand == brand && e.os == os) {
        finalArr.push(e)
      }
    })
  }
  // First condition when brand is all
  if (brand == 'all' && os != 'all') {
    console.log('brand is all and os is something')
    mydata.forEach(e => {
      if (e.os == os) {
        finalArr.push(e)
      }
    })
  }
  // Second condition when os is All
  if (brand != 'all' && os == 'all') {
    console.log('brand is somethnig and os is all')
    mydata.forEach(e => {
      if (e.brand == brand) {
        finalArr.push(e)
      }
    })
  }
  // when both are all
  if (brand == 'all' && os == 'all') {
    $('#idtbody tr').show()
  } else {
    display(finalArr)
  }
  // console.log(finalArr)
})

// search Function
function searchText (val) {
  $('#idtbody tr').each(function () {
    var found = 'false'
    $(this).each(function () {
      console.log($(this).text())
      if (
        $(this)
          .text()
          .toLowerCase()
          .indexOf(val.toLowerCase()) >= 0
      ) {
        found = 'true'
      }
    })
    if (found == 'true') {
      $('#head').show()
      $(this).show()
    } else {
      $('#head').show()
      $(this).hide()
    }
  })
}
$(document).on('keyup', '#searchInput', function () {
  searchText($('#searchInput').val())
})
