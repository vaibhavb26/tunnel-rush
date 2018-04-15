function initTriangle1(gl, z_cord) {
    
      // Create a buffer for the cube's vertex positions.
      var r = Math.sqrt(2);
      const positionBuffer = gl.createBuffer();
    
      // Select the positionBuffer as the one to apply buffer
      // operations to from here out.
    
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
      // Now create an array of positions for the cube.
      var positions = [
        0, 0, z_cord,
        r*(Math.cos(Math.PI/8)), r*(Math.sin(Math.PI/8)), z_cord,
        r*(Math.cos(3*Math.PI/8)), r*(Math.sin(3*Math.PI/8)), z_cord,
    
        // 0, 0, z_cord,
        // r*(Math.cos(7*Math.PI/8)), r*(Math.sin(7*Math.PI/8)), z_cord,
        // r*(Math.cos(5*Math.PI/8)), r*(Math.sin(5*Math.PI/8)), z_cord,
    
        0, 0, z_cord,
        r*(Math.cos(9*Math.PI/8)), r*(Math.sin(9*Math.PI/8)), z_cord,
        r*(Math.cos(11*Math.PI/8)), r*(Math.sin(11*Math.PI/8)), z_cord,
    
        // 0, 0, z_cord,
        // r*(Math.cos(13*Math.PI/8)), r*(Math.sin(13*Math.PI/8)), z_cord,
        // r*(Math.cos(15*Math.PI/8)), r*(Math.sin(15*Math.PI/8)), z_cord,

    
      ];
      
      // Now pass the list of positions into WebGL to build the
      // shape. We do this by creating a Float32Array from the
      // JavaScript array, then use it to fill the current buffer.
    
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    
      // Now set up the colors for the faces. We'll use solid colors
      // for each face.
    var faceColors = [];
    if(greyscale == 1) {
      faceColors = [
        [0.50,  0.50,  0.50,  1.0],    // Back face: red
        // [1.0,  0.25,  0.25,  1.0],    // Back face: red
        
      ];
    }
    else
    {
      faceColors = [
        // [0.50,  0.50,  0.50,  1.0],    // Back face: red
        [1.0,  0.25,  0.25,  1.0],    // Back face: red
        
      ];
    }
      // window.alert(faceColors[1][1]);
      // Convert the array of colors into a table for all the vertices.
    
      var colors = [];
        for(var j = 0; j < 6; j++) {
        const c = faceColors[0];
    
        // Repeat each color four times for the four vertices of the face
        colors = colors.concat(c, c, c);
        }
      const colorBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    
      // Build the element array buffer; this specifies the indices
      // into the vertex arrays for each face's vertices.
    
      const indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    
      // This array defines each face as two triangles, using the
      // indices into the vertex array to specify each triangle's
      // position.
    
      const indices = [
        0,  1,  2,      // front
        3,  4,  5,      // back
        // 6,  7,  8,    // top
        // 9, 10, 11,    // bottom
      ];
      // Now send the element array to GL
    
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
      const textureCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
    
      const textureCoordinates = [
        // Front
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // Back
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // Top
        // 0.0,  0.0,
        // 1.0,  0.0,
        // 1.0,  1.0,
        // 0.0,  1.0,
        // // Bottom
        // 0.0,  0.0,
        // 1.0,  0.0,
        // 1.0,  1.0,
        // 0.0,  1.0, 
    ];
    
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                    gl.STATIC_DRAW);
    
      return {
        position: positionBuffer,
        color: colorBuffer,
        indices: indexBuffer,
      };
  }
  function initTriangle2(gl, z_cord) {
    
      // Create a buffer for the cube's vertex positions.
      var r = Math.sqrt(2);
      const positionBuffer = gl.createBuffer();
    
      // Select the positionBuffer as the one to apply buffer
      // operations to from here out.
    
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
      // Now create an array of positions for the cube.
      var positions = [
        0, 0, z_cord,
        r*(Math.cos(Math.PI/8)), r*(Math.sin(Math.PI/8)), z_cord,
        r*(Math.cos(3*Math.PI/8)), r*(Math.sin(3*Math.PI/8)), z_cord,
    
        // 0, 0, z_cord,
        // r*(Math.cos(7*Math.PI/8)), r*(Math.sin(7*Math.PI/8)), z_cord,
        // r*(Math.cos(5*Math.PI/8)), r*(Math.sin(5*Math.PI/8)), z_cord,
    
        0, 0, z_cord,
        r*(Math.cos(9*Math.PI/8)), r*(Math.sin(9*Math.PI/8)), z_cord,
        r*(Math.cos(11*Math.PI/8)), r*(Math.sin(11*Math.PI/8)), z_cord,
    
        // 0, 0, z_cord,
        // r*(Math.cos(13*Math.PI/8)), r*(Math.sin(13*Math.PI/8)), z_cord,
        // r*(Math.cos(15*Math.PI/8)), r*(Math.sin(15*Math.PI/8)), z_cord,

    
      ];
      
      // Now pass the list of positions into WebGL to build the
      // shape. We do this by creating a Float32Array from the
      // JavaScript array, then use it to fill the current buffer.
    
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    
      // Now set up the colors for the faces. We'll use solid colors
      // for each face.
    
      const faceColors = [
        [1.0,  0.25,  0.25,  1.0],    // Back face: red
        
      ];
      // window.alert(faceColors[1][1]);
      // Convert the array of colors into a table for all the vertices.
    
      var colors = [];
        for(var j = 0; j < 6; j++) {
        const c = faceColors[0];
    
        // Repeat each color four times for the four vertices of the face
        colors = colors.concat(c, c, c);
        }
      const colorBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    
      // Build the element array buffer; this specifies the indices
      // into the vertex arrays for each face's vertices.
    
      const indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    
      // This array defines each face as two triangles, using the
      // indices into the vertex array to specify each triangle's
      // position.
    
      const indices = [
        0,  1,  2,      // front
        3,  4,  5,      // back
        // 6,  7,  8,    // top
        // 9, 10, 11,    // bottom
      ];
      // Now send the element array to GL
    
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
      const textureCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
    
      const textureCoordinates = [
        // Front
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // Back
        0.0,  0.0,
        1.0,  0.0,
        1.0,  1.0,
        0.0,  1.0,
        // Top
        // 0.0,  0.0,
        // 1.0,  0.0,
        // 1.0,  1.0,
        // 0.0,  1.0,
        // // Bottom
        // 0.0,  0.0,
        // 1.0,  0.0,
        // 1.0,  1.0,
        // 0.0,  1.0, 
    ];
    
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),
                    gl.STATIC_DRAW);
    
      return {
        position: positionBuffer,
        textureCoord: textureCoordBuffer,
        indices: indexBuffer,
      };
  }
    
    //
    // Draw the scene.
    //
    function drawTriangle(gl, programInfo, buffers, texture, deltaTime, i, j) {
        var modelViewMatrix3, projectionMatrix3;
      
      // Now move the drawing position a bit to where we want to
      // start drawing the square.
      // window.alert(i);
      const fieldOfView = 45 * Math.PI / 180;   // in radians
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
      const zNear = 0.1;
      const zFar = 100.0;
      
      modelViewMatrix3 = mat4.create();
      projectionMatrix3 = mat4.create();
      mat4.perspective(projectionMatrix3,
        fieldOfView,
        aspect,
        zNear,
        zFar);
        mat4.translate(modelViewMatrix3,     // destination matrix
            modelViewMatrix3,     // matrix to translate
            [0.0, 1.0 - cam_flag, -6.0 + i]);  // amount to translate
        
    
      mat4.rotate(modelViewMatrix3,  // destination matrix
                  modelViewMatrix3,  // matrix to rotate
                  obs_tri[j] * .7,// amount to rotate in radians
                  [0, 0, 1]);       // axis to rotate around (X)
    
      // Tell WebGL how to pull out the positions from the position
      // buffer into the vertexPosition attribute
      {
        const numComponents = 3;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexPosition,
            numComponents,
            type,
            normalize,
            stride,
            offset);
        gl.enableVertexAttribArray(
            programInfo.attribLocations.vertexPosition);
      }
    
      // Tell WebGL how to pull out the colors from the color buffer
      if(cam % 2 == 1) {
      {
        const numComponents = 2; // every coordinate composed of 2 values
        const type = gl.FLOAT; // the data in the buffer is 32 bit float
        const normalize = false; // don't normalize
        const stride = 0; // how many bytes to get from one set to the next
        const offset = 0; // how many bytes inside the buffer to start from
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
        gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, numComponents, type, normalize, stride, offset);
        gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
    }
  }
  else {
      // into the vertexColor attribute.
      {
        const numComponents = 4;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
        gl.vertexAttribPointer(
            programInfo.attribLocations.vertexColor,
            numComponents,
            type,
            normalize,
            stride,
            offset);
        gl.enableVertexAttribArray(
            programInfo.attribLocations.vertexColor);
      
          }
        }
    
      // Tell WebGL which indices to use to index the vertices
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    
      // Tell WebGL to use our program when drawing
    
      gl.useProgram(programInfo.program);
    
      // Set the shader uniforms
    
      gl.uniformMatrix4fv(
          programInfo.uniformLocations.projectionMatrix,
          false,
          projectionMatrix3);
      gl.uniformMatrix4fv(
          programInfo.uniformLocations.modelViewMatrix,
          false,
          modelViewMatrix3);
          if(cam % 2 == 1) {
          gl.activeTexture(gl.TEXTURE0);
          
            // Bind the texture to texture unit 0
            gl.bindTexture(gl.TEXTURE_2D, texture);
          
            // Tell the shader we bound the texture to texture unit 0
            gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
          }
      
      // Update the rotation for the next draw
      if(i >= 200)
        obs_tri[j] += init_rot[j];
      // cubeRotation += deltaTime;
      // cubeRotation += deltaTime;
      {
        const vertexCount = 6;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
      }
    
    }
    
    function drawTriangle1(gl, programInfo, buffers, deltaTime, i, j) {
      var modelViewMatrix3, projectionMatrix3;
    
    // Now move the drawing position a bit to where we want to
    // start drawing the square.
    // window.alert(i);
    const fieldOfView = 45 * Math.PI / 180;   // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    
    modelViewMatrix3 = mat4.create();
    projectionMatrix3 = mat4.create();
    mat4.perspective(projectionMatrix3,
      fieldOfView,
      aspect,
      zNear,
      zFar);
      mat4.translate(modelViewMatrix3,     // destination matrix
          modelViewMatrix3,     // matrix to translate
          [0.0, 1.0 - cam_flag, -6.0 + i]);  // amount to translate
      
  
    mat4.rotate(modelViewMatrix3,  // destination matrix
                modelViewMatrix3,  // matrix to rotate
                obs_tri[j] * .7,// amount to rotate in radians
                [0, 0, 1]);       // axis to rotate around (X)
  
    // Tell WebGL how to pull out the positions from the position
    // buffer into the vertexPosition attribute
    {
      const numComponents = 3;
      const type = gl.FLOAT;
      const normalize = false;
      const stride = 0;
      const offset = 0;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
      gl.vertexAttribPointer(
          programInfo.attribLocations.vertexPosition,
          numComponents,
          type,
          normalize,
          stride,
          offset);
      gl.enableVertexAttribArray(
          programInfo.attribLocations.vertexPosition);
    }
  
    // Tell WebGL how to pull out the colors from the color buffer
    if(cam % 2 == 1) {
    {
      const numComponents = 2; // every coordinate composed of 2 values
      const type = gl.FLOAT; // the data in the buffer is 32 bit float
      const normalize = false; // don't normalize
      const stride = 0; // how many bytes to get from one set to the next
      const offset = 0; // how many bytes inside the buffer to start from
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
      gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, numComponents, type, normalize, stride, offset);
      gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord);
  }
}
else {
    // into the vertexColor attribute.
    {
      const numComponents = 4;
      const type = gl.FLOAT;
      const normalize = false;
      const stride = 0;
      const offset = 0;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
      gl.vertexAttribPointer(
          programInfo.attribLocations.vertexColor,
          numComponents,
          type,
          normalize,
          stride,
          offset);
      gl.enableVertexAttribArray(
          programInfo.attribLocations.vertexColor);
    
        }
      }
  
    // Tell WebGL which indices to use to index the vertices
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
  
    // Tell WebGL to use our program when drawing
  
    gl.useProgram(programInfo.program);
  
    // Set the shader uniforms
  
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix3);
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix3);
        if(cam % 2 == 1) {
        gl.activeTexture(gl.TEXTURE0);
        
          // Bind the texture to texture unit 0
          gl.bindTexture(gl.TEXTURE_2D, texture);
        
          // Tell the shader we bound the texture to texture unit 0
          gl.uniform1i(programInfo.uniformLocations.uSampler, 0);
        }
    
    // Update the rotation for the next draw
    if(i >= 200)
      obs_tri[j] += init_rot[j];
    // cubeRotation += deltaTime;
    // cubeRotation += deltaTime;
    {
      const vertexCount = 6;
      const type = gl.UNSIGNED_SHORT;
      const offset = 0;
      gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
    }
  
  }
  
  