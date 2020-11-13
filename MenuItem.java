
public class MenuItem {
	
	protected String name;
	protected int cal;
	protected String type;
	protected int ID;
	
	public MenuItem(int id, String Name, int calo, String typ) {
		ID = id;
		name = Name;
		cal = calo;
		type = typ;
	}
	
	public int getID() {
		return ID;
	}
	public String getName() {
		return name;
	}
	public int getCalories() {
		return cal;
	}
	public String getType() {
		return type;
	}

}
