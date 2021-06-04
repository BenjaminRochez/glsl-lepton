#ifdef GL_ES
precision mediump float;
#endif

void main(){
    vec3 color = vec3(1., 1., 0.5);
    gl_FragColor = vec4(color, 1.);
}