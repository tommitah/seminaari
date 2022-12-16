
public List<ItemProperty> listItem = new List<ItemProperty>();
//...
//...
var theData = (
	from data in listItem
	where data.itemType.Equals(itemTypeList.captionText.text)
	select data
	).ToList();
