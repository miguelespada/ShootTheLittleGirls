#pragma strict

function Start () {

	rigidbody.velocity.x = Random.Range(5, 20);
    Destroy(gameObject, 50);

}

function Update () {

}