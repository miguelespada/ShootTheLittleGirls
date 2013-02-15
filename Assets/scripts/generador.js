#pragma strict

public var freq: float = 5.0;
private var  nextTime: float = 0.0;
public var  prefab: GameObject;

function Start () {

}

function Update () {
		if(Time.time > nextTime ){
    		Instantiate (prefab);
			nextTime = Time.time + freq;
		}
}