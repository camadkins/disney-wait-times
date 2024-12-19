from flask import Flask, jsonify, request
from flask_cors import CORS
from routes.themes import themes_bp

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

# Mock data
parks = [
    {"id": 1, "name": "Magic Kingdom"},
    {"id": 2, "name": "Epcot"},
    {"id": 3, "name": "Hollywood Studios"},
    {"id": 4, "name": "Animal Kingdom"}
]

rides = {
    1: [
        {"id": 1, "name": "Space Mountain", "wait_time": 30, "is_open": True},
        {"id": 2, "name": "Splash Mountain", "wait_time": 45, "is_open": True}
    ],
    2: [
        {"id": 3, "name": "Test Track", "wait_time": 20, "is_open": True},
        {"id": 4, "name": "Soarin'", "wait_time": 25, "is_open": False}
    ],
    3: [
        {"id": 5, "name": "Tower of Terror", "wait_time": 50, "is_open": True},
        {"id": 6, "name": "Rock 'n' Roller Coaster", "wait_time": 60, "is_open": True}
    ],
    4: [
        {"id": 7, "name": "Expedition Everest", "wait_time": 15, "is_open": True},
        {"id": 8, "name": "Dinosaur", "wait_time": 10, "is_open": False}
    ]
}

# Mock selections
selections = {
    "parks": [1, 2],  # Selected park IDs
    "rides": [1, 2, 3]  # Selected ride IDs
}

@app.route("/parks", methods=["GET"])
def get_parks():
    """
    Returns a list of parks.
    """
    return jsonify(parks)


@app.route("/rides/<int:park_id>", methods=["GET"])
def get_rides(park_id):
    """
    Returns a list of rides for the given park ID.
    """
    if park_id in rides:
        return jsonify(rides[park_id])
    else:
        return jsonify({"error": "Park not found"}), 404


@app.route("/fetch-selections", methods=["GET"])
def fetch_selections():
    """
    Returns the current selections for parks and rides.
    """
    return jsonify(selections)


@app.route("/update-selections", methods=["POST"])
def update_selections():
    """
    Update the current selections for parks and rides.
    """
    global selections
    try:
        new_selections = request.get_json()
        if not new_selections:
            return jsonify({"error": "Invalid data"}), 400

        # Validate and update selections
        selections["parks"] = new_selections.get("parks", [])
        selections["rides"] = new_selections.get("rides", [])

        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/fetch-display-config", methods=["GET"])
def fetch_display_config():
    """
    Returns mock display configuration data.
    """
    return jsonify({
        "parks": [1, 2],
        "rides": [1, 2, 3]
    })


# Endpoint for system status
@app.route('/system-status', methods=['GET'])
def system_status():
    """
    Returns mock system status data.
    """
    return jsonify({
        "cpuUsage": 45,  # Replace with actual system monitoring logic
        "memoryUsage": 78  # Replace with actual system monitoring logic
    })


# Endpoint for recent logs
@app.route('/recent-logs', methods=['GET'])
def recent_logs():
    """
    Returns mock log data.
    """
    logs = [
        {"id": 1, "message": "System started successfully", "severity": "info"},
        {"id": 2, "message": "High CPU usage detected", "severity": "warning"},
        {"id": 3, "message": "Database connection failed", "severity": "error"}
    ]
    return jsonify(logs)

# Register blueprints
app.register_blueprint(themes_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run(debug=True)
